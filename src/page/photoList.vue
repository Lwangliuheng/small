<style scoped>
  .listTitle{
    font-weight: 800;
    font-size: 18px;
    padding:15px;
  }
  #scaleImg{
    display: -webkit-box;
  }

  #scaleImg li{
    margin: 15px;
    border-radius: 15px;
  }
  #scaleImg li img{
    width:100px;
    height:100px;
  }
  #scaleImg span{
    font-size: 14px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #232323;
    display: block;
    margin-top: -4px
  }
</style>
<template>
  <div style="background: #fff;">
    <!--pages/doubleroom/photoList/photoList.wxml-->
    <div class="body-view">
      <div class="listTitle">
        <span>{{licenseNo}}</span>
      </div>
      <div class="photoBox">
        <ul id="scaleImg">
          <li v-for="item in recordsImg">
            <img :data-src="item.photoPath" :src="item.photoMiniPath">
            <br>
            <span>{{item.photoType}}</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  // 按下 Enter 键响应事件函数
  import Viewer from 'viewerjs';
  import axios from 'axios'
  export default {
    data() {
      return {
        licenseNo: '',
        recordsImg: ''
      }
    },
    //获取照片信息
    created(){
      //获取照片信息
      this.licenseNo = this.$route.params.licenseNo
      this.recordsImg = JSON.parse(localStorage.getItem(this.licenseNo));
      // console.log(localStorage.getItem(this.licenseNo),77777777777)
      this.$nextTick(() => {
        new Viewer(document.getElementById('scaleImg'), {
          url: 'data-src',
          navbar:false,
          toolbar:true,
          loop: true
        })
      })
    },

    mounted() {
      // this.licenseNo = this.$route.params.licenseNo
      // console.log(this.$route.params)

    },
    watch: {

    },
    methods: {

      open2() {
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
      },
      open4(resdes) {
        this.$message.error(resdes);
      },
      //无
      getDetailData(){
        var paramData = {
          'surveyNo': this.$store.state.surveyNo
        }
        axios.post(this.ajaxUrl+"/survey_detail/v1/getDetail",paramData)
          .then(response => {
            if(response.status == 200){
              this.detailData = response.data.detail;
              this.targetVehicle = response.data.targetVehicle;
              this.detailPhotoList = response.data.targetVehicle.photoList;
              this.thirdPartyList = response.data.thirdPartyList;
              this.signStatus = response.data.detail.signStatus;
              this.signImgUrl = response.data.detail.signUrl;
              this.agreeThird = response.data.detail.isAgreeThird;
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      //无
      loginIn() {
        var paramData = {
          "username": this.username,
          "userpwd": this.userpwd,
          "valicode": this.valicode
        }
        if(this.username == ""){
          this.open4("请输入用户名")
        }else if(this.userpwd == ""){
          this.open4("请输入密码")
        }else if(this.valicode == ""){
          this.open4("请输入验证码")
        }else{
          axios.post(this.ajaxUrl+"/pubsurvey/manage/login/v1/login",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                this.open2();
                var setHeaderActive;
                localStorage.setItem('chinaName',response.data.data.user.chinaName)
                localStorage.setItem('userName',response.data.data.user.userName)
                localStorage.setItem('orgcode',response.data.data.user.orgcode);
                localStorage.setItem('insurecompanyCode',response.data.data.org.insurecompanyCode);
                var insititueName = 0,caseNum = 0;
                for(let i in response.data.data.userfunctions){
                  if(response.data.data.userfunctions[i].name == "机构管理"){
                    insititueName++;
                  }
                  if(response.data.data.userfunctions[i].name == "坐席管理"){
                    caseNum++;
                  }
                }
                if(insititueName != 0 && caseNum ==0){
                  setHeaderActive = false;
                  localStorage.setItem('setHeaderActive',setHeaderActive)
                }else if(insititueName == 0 && caseNum !=0){
                  setHeaderActive = true
                  localStorage.setItem('setHeaderActive',setHeaderActive)
                }
                this.$router.push({path:'/surveyContant'})
              }else {
                this.open4(response.data.resdes);
                this.getCode()
                this.valicode = '';
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    },

    components: {
    },
  };
</script>

