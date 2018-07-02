<style scoped>
  /* pages/filedViewRecord/filedViewRecord.wxss */
  .mb10{
    margin-bottom:10px;
  }
  .oh{
    overflow: hidden;
    height:100%;
  }
  .flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .flex-v {
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .flex-1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .body-view{
    width:100%;
    background:#fff;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    padding:13px 15px 0;
  }
  .title{
    text-align:center;
  }
  .smlTitle{
    line-height:29px;
    font-size:16px;
    color:#222;
  }
  .bigTitle{
    line-height:27px;
    font-size:18px;
    color:#222;
  }
  .dashImg{
    height:2px;
    width:100%;
    margin:15px 0;
  }
  .dashImg2{
    height:2px;
    width:100%;
    margin:20px 0;
  }
  .textItem{
    line-height:22px;
    color:#333;
    font-size:15px;
  }
  .textItem2{
    line-height:33px;
    color:#999;
    font-size:14px;
  }
  .tableItem{
    border:1px solid #2eab3b;
    margin-top:-1px;
    line-height:16px;
    font-size:15px;
    color:#333;
    overflow:hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .tableItem .tableItemLeft{
    padding:5px 0;
    display:inline-block;
    text-align:center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .tableItem .tableItemRight{
    float:right;
    border-left:1px solid #2eab3b;
    width:77%;
    display:inline-block;
    text-align:center;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    padding:9px 20px;
  }
  .tableItemCenter{
    line-height:43px;
    display:inline-block;
    text-align:center;
    width:100%;
    font-size:13px;
    color:#2eab3b;
    font-weight:700;
  }

  .signBox{
    width:100%;
    border:1px solid #2eab3b;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    padding:12px 14px 11px;
  }
  .firstLine{
    padding:0 0;
    overflow:hidden;
    margin-bottom:18px;
  }
  .imgDiv{
    width:39px;
    align-items:center;
  }
  .imgDiv image{
    width:24px;
    height:24px;
  }
  .firstLineText{
    line-height:22px;
    font-size:14px;
    color:#333;
  }
  .secondLine{
    padding:0 0;
    overflow:hidden;
  }
  .secondLineText{
    line-height:22px;
    font-size:14px;
    color:#333;
  }
  .signShowBox{
    padding-top:15px;
    padding-bottom: 8px;

  }
  .openSignButton{
    display:block;
    width:40%;
    margin:0 auto;
    height:40px;
    text-align:center;
    line-height:40px;
    font-size:15px;
    color:#fff;
    background:#2eab3b;
    border-radius:15px;
  }
  .signedShowBox{
    padding-top:27px;
    height:100px;
  }
  .signedShowBox text{
    display:block;
    float: left;
    width:364px;
    text-align: right;
    font-size:15px;
    color:#222222;
    height: 88px;
    line-height: 88px;
  }
  .signedShowBox .signImg{
    width:88px;
    height: 260px;
    transform: rotate(-90deg) translate3d(-100%,0,0);
    transform-origin: left top;
  }

  .bottomTitleView{
    position:relative;
    margin-bottom:28px;
  }
  .bottomTitleBg{
    width:50%;
    height:16px;
    display:block;
    margin:0 auto;
  }
  .bottomTitleText{
    position:absolute;
    top:0;
    left:50%;
    transform:translate3d(-50%,0,0);
    height:16px;
    font-size:15px;
    color:#222;
    line-height:15px;
  }
  .bottomInfo{
    padding:0 13px 44px 34px;
    font-size:13px;
  }
  .textItem3{
    line-height:22px;
    color:#666;
    font-size:13px;
    text-indent:-21px;
  }
  .red{
    color:#ff0000;
  }

  .signWrap{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background:rgba(0,0,0,0.8);
  }
  .signContent{
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate3d(-50%,-50%,0);
    background:#fff;
    width:90%;
    height: 80vh;
    border-radius:30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding:17px 60px 0px 18px;
  }
  .signTip1{
    line-height: 40px;
    font-size:18px;
    right:37px;
    top:17px;
    color:#333333;
    width:100%;
    position: absolute;
    transform:rotate(90deg) translate3d(100%,0,0);
    transform-origin:right 50%;
  }
  .signHereBox{
    height:790px;
    width: 60%;
    border:1px solid #dedede;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-align: center;
    float: left;
  }
  .signHereTip{
    color:#e2e2e2;
    line-height: 234px;
    font-size:26px;
  }
  canvas{
    height:466px;
    width:100%;
    border-radius:20px;
    border:1px solid #ccc;
  }
  .closeBtn{
    background:#fff;
    position: absolute;
    right:-15px;
    bottom:-15px;
    width: 64px;
    height: 64px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .closeBtn img{
    width: 26px;
    height: 26px;
    position: absolute;
    left:19px;
    top: 19px;
  }
  .signContentBottom{
    /*padding-top:12rpx;*/
  }
  .operationBox{
    width:50%;
    height: 116px;
    padding-top:17px;
    padding-left: 70px;
    display: flex;
  }
  .operationBox img{
    display: inline-block;
    width:54px;
    height: 54px;
    transform:rotate(90deg);
  }
  .confirmImg{
    margin-left: 28px;
  }
  .bbn{
    border-bottom:none;
  }
  #img-box,
  #canvas-drawImage h5, #canvas-brush {
    display: none;
  }
  #canvas-drawImage button{
    width: auto;
    position: absolute;
    flex: 1;
  }
  .wrap #control {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .fix-body {
    position: fixed !important;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  .inner.draw {
    display: flex;
    flex-direction: row;
  }
  .draw h5 {
    margin-bottom: 10px;
  }
  #img-box {
    flex: 1;
    padding-left: 10px;
  }
  #img-box .img-item {
    position: relative;
    display: inline-block;
  }
  #img-box .img-item .fa {
    position: absolute;
    cursor: pointer;
    right: 1px;
    top: -1px;
    font-size: 12px;
    font-weight: 1;
    display: none;
    color: #ccc;
  }
  #img-box .img-item:hover .fa {
    display: block;
  }
  #img-box .img-item .fa:hover {
    color: #f2849e;
  }
  #img-box img {
    border: 1px #ccc solid;
    width: 90px;
    height: 60px;
    margin: 5px;
  }
  .wrap{
    width: 740px;
    border: 1px #585858 solid;
    overflow: hidden;
  }
  .fl{
    float: left;
    display: block;
  }
  #canvas{
    border-right: 1px #585858 solid;
    cursor: crosshair;
  }
  #control{
    width: 130px;
    height: 400px;
    margin-left: 4px;
  }
  #control div{
    padding: 5px;
  }
  #canvas-color ul{
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  #canvas-color ul li{
    float: left;
    display: inherit;
    width: 13px;
    height: 13px;
    border: 3px #fff solid;
    margin: 8px;
    cursor: pointer;
  }
  #canvas-color .active {
    border: 1px solid #f2849e;
  }
  #canvas-brush span{
    display: inline-block;
    width: 20px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;
  }
  #canvas-brush .small {
    font-size: 12px;
  }
  #canvas-brush .middle {
    font-size: 14px;
  }
  #canvas-brush .big {
    font-size: 16px;
  }

  #canvas-control span{
    display: inline-block;
    font-size: 14px;
    width: 20px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;
  }
  #canvas-control .active,
  #canvas-brush .active {
    color: #f2849e;
  }
  .drawImage {
    width: 100px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
  }
  .loss-text{
    display:inline-block;
    text-align:center;
    width:100%;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    padding:9px 20px;
  }
  .tableItem-wrap{
    width:100%;
    position: relative;
    overflow: hidden;
    border-bottom:1px solid #2eab3b;
  }
  .tableItem-left{
    border-right:1px solid #2eab3b;
    width:50%;
  }
  .tableItem-left-li{
    height:30px;
    line-height: 30px;
    text-align: center;
    border-bottom:1px solid #2eab3b;
  }
  .tableItem-right{
    width:66%;
    position:absolute;
    top:0px;
    left:150px;
    text-align: center;
    line-height: 28px;
  }
  .signature-wrap{
    overflow: hidden;
    padding-top:20px;
  }
  .signature-wrap p{
     float:right;
     padding-right:20px;
  }
  .signature-word{
    padding-right:10px;
  }
  .signature-content p{
     text-indent:20px;
     padding-bottom:20px;
  }
  .sq{
    margin-bottom:10px;
  }
  .show{
    display:block;
  }
  .hide{
    display:none;
  }

  .avatar-uploader{
        margin:0 auto;
       margin-bottom:10px;
   }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    line-height: 100px;
    width: 100px;
    height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
  }
  .upload_tu{
    margin-top:20px;
    padding:10px;
    border: 1px solid #2eab3b;
    overflow: hidden;
    margin-bottom:40px;
  }
  
  .isIos_wrap{
    margin-right:4px;
    float:left;
  }
  .isIos_wrap_te{
    margin-right:0px;
    float:left;
  }
  .upload_tu p{
     width: 100px;
    text-align: center;
  }
  .input_box{
    width:100px;
    height:100px;
    border:1px dashed #d9d9d9;
  }
  .file_box{
    position:absolute;
    left:-1000000px;
  }
  .tj{
    width:80%;
    margin:0 auto;
    height:50px;
    line-height: 50px;
    text-align: center;
    color:#fff;
    background-color: #096fd4;
    border-radius: 4px;
    margin-top:30px;
    margin-bottom:10px;
  }
  .gay{
    background-color: #999999;
  }
  .success_wrod{
     padding-top:10px;
     text-align: center;
     color:#999999;
  }
</style>
<template>
  <div style="background: #fff;">

    <!--<div class="body-view {{showSignFlag?'oh':''}}">-->
    <div class="body-view">
      <div class="title">
        <span class="smlTitle">{{detailData.insureName}}</span>
      </div>
      <div class="title">
        <span class="bigTitle">机动车辆保险事故现场查勘记录</span>
      </div>

      <img class="dashImg" style="width:100%;height:2px;" src="../images/dashline.png" />

      <div class="textItem">
        <span>报案号：{{detailData.reportNo}}</span>
      </div>
      <div class="textItem">
        <span>出险时间：{{detailData.accidentTime}}</span>
      </div>
      <div class="textItem mb10">
        <span>出险/查勘地点：{{detailData.accidentAddress}}</span>
      </div>
      <!-- 保险车辆信息 -->
      <div class="textItem2">
        <span>保险车辆信息</span>
      </div>
      <div class="tableItem bbn">
        <span class="tableItemLeft">车牌号</span><span class="tableItemRight">{{targetVehicle.licenseNo}}</span>
      </div>
      <div class="tableItem bbn">
        <span class="tableItemLeft">驾驶员姓名</span><span class="tableItemRight">{{targetVehicle.casePerson}}</span>
      </div>
      <div class="tableItem bbn">
        <span class="tableItemLeft">联系方式</span><span class="tableItemRight">{{targetVehicle.phone}}</span>
      </div>
      <div class="tableItem bbn">
        <span class="tableItemLeft">保险公司</span><span class="tableItemRight">{{targetVehicle.companyName}}</span>
      </div>
      <div class="tableItem mb10" >
       <!--  <span class="tableItemCenter" v-if="curDetail.targetFlag == 1 || curDetail.licenseNo == targetVehicle.licenseNo" @click="gotolink('photoButton0',targetVehicle)" data-licenseNo="detailData.targetVehicle.licenseNo" id="" >现场照片 ></span> -->
      </div>
      <!-- 三者车辆信息 -->
      <div  v-for='(item,index) in thirdPartyList'>
        <div>
          <span class="textItem2">三者车辆信息</span>
        </div>
        <div class="tableItem bbn">
          <span class="tableItemLeft">车牌号</span><span class="tableItemRight">{{item.licenseNo}}</span>
        </div>
        <div class="tableItem bbn">
          <span class="tableItemLeft">联系方式</span><span class="tableItemRight">{{item.phone}}</span>
        </div>
        <div class="tableItem mb10">
         <!--  <span class="tableItemCenter" v-if="curDetail.targetFlag == 1 || curDetail.licenseNo == item.licenseNo" data-licenseNo="item.licenseNo" @click="gotolink('photoButton'+index+1,item)" >现场照片 ></span> -->
        </div>
      </div>
      <!--事故经过-->
      <div class="loss-situation">
          <div class="textItem2">
             <span>事故经过</span>
          </div>
          <div class="signBox">
                {{detailData.descripe}}
          </div>
      </div>
      <!--损伤情况-->
      <div class="loss-situation"  v-if="lossState">
          <div class="textItem2">
             <span>损伤情况</span>
          </div>
          <div v-for="item in claimInfo" class ="sq">
              <div class="tableItem bbn">
                <span class="loss-text">{{item.licenseNo}}</span>
              </div>
              <div class="tableItem bbn">
                  <div class="tableItem-wrap">
                      <ul class="tableItem-left" v-for="value in item.damagedPart"> 
                        <li class="tableItem-left-li">{{value}}</li>
                      </ul>
                      <div class="tableItem-right">
                        赔付金额：￥{{item.claimAmount}}
                      </div>
                  </div>
                  
               </div>

          </div>
         
      </div>
      <div class="textItem2">
          <span>被保险人（驾驶人）签字</span>
      </div>
      <!--签完名框-->
      <div class="signBox" v-if="signStatus !=0?true:false">
          <div class="signature-content">
             <p>
               被保险人/驾驶人声明：以上内容本人确认属实；向你公司提交的索赔资料真实、可靠，没有任何 虚假和隐瞒；如有虚假、欺诈行为、愿意承担由此产生的所有法律责任。
             </p>
             <p v-if="agreeThird == 2">
               被保险人同意由保险公司将此次事故造成三者车辆损失的赔款直接转至三者车提供的账户内。
             </p>
             <p v-if="agreeThird == 3 && thirdPartyListState">
               三者车辆（{{plateNumber}}）已确认收到保险车辆（{{targetVehicle.licenseNo}}）赔偿款（{{claimMoney}}）元，并承诺后期不在追究对方及对方保险公司的赔偿责任。
             </p>
          </div>
          <div class="signedShowBox">
              <!-- <span>签字：</span> -->
            <img  class="signImg" :src="signImgUrl">
          </div>
          <!-- <div class="signature-wrap">
              <p>
                <span class="signature-word">签字</span>
                <img   class="cleanImg" :src="src">
              </p>
          </div> -->
      </div>
     <div class="signBox" v-if="signStatus ==0?true:false">
          <div class="firstLine flex" >
              <div class="imgDiv flex">
                  <img style="height:30px;width: 30px;" class="img flex" src="../images/greenCircle.png">
              </div>
              <div class="firstLineText flex-1">
                  <span>被保险人/驾驶人声明：以上内容本人确认属实；向你公司提交的索赔资料真实、可靠，没有任何 虚假和隐瞒；如有虚假、欺诈行为、愿意承担由此产生的所有法律责任。</span>
              </div>
          </div>
          <div class="secondLine flex" v-if="agreeThird == 2">
              <div class="imgDiv flex">
                 <!--  <img style="height:30px;width: 30px;" @click="changeAgreeThird" v-if="agreeThird == 0" class="img flex" src="../images/greyCircle.png"/> -->
                  <img style="height:30px;width: 30px;" class="img flex" src="../images/greenCircle.png"/>
              </div>
              <div class="secondLineText flex-1">
                  <span>被保险人同意由保险公司将此次事故造成三者车辆损失的赔款直接转至三者车提供的账户内。</span>
              </div>
          </div>
          <div class="secondLine flex" v-if="agreeThird == 3 && thirdPartyListState">
              <div class="imgDiv flex">
                  <img style="height:30px;width: 30px;" class="img flex" src="../images/greenCircle.png"/>
              </div>
              <div class="secondLineText flex-1">
                  <span>三者车辆（{{plateNumber}}）已确认收到保险车辆（{{targetVehicle.licenseNo}}）赔偿款（{{claimMoney}}）元，并承诺后期不在追究对方及对方保险公司的赔偿责任。</span>
              </div>
          </div>
          <div class="signShowBox">
              <span @click="showSignDiv" class="openSignButton">点击签字</span>
          </div>
         <!--  <div class="signedShowBox" v-if="signStatus!=0?true:false">
              <span>签字：</span>
            <img  class="signImg" :src="signImgUrl">
          </div> -->
      </div>
      <div class="upload_tu">
        <!-- <div class="isIos_wrap_te">
          <el-upload
            name="bankCardPhoto"
            :data="szDtata"
            class="avatar-uploader"
            action="/boot-pub-survey-video/smallclaim/v1/sign"
            :show-file-list="false"
            :on-success="yhhandleAvatarSuccess"
            :before-upload="szbeforeAvatarUpload">
            <img v-if="yhimageUrl" :src="yhimageUrl" class="avatar" >
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p class="top_wrod">银行卡</p>
        </div> -->

        <div style="overflow:hidden;" v-if="!upStatus">
           <div class="isIos_wrap">
               <div class="input_box" @click="upImg('file_box_sz')">
               <img v-if="szimageUrl" :src="szimageUrl" class="avatar" >
               <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </div>
               <input type="file" name="" accept="image/jpg,image/jpeg,image/png" class="file_box file_box_sz" @change="showPreview($event,1)"> 
               <p class="top_wrod">{{szWord}}</p>
           </div>
           <div class="isIos_wrap">
               <div class="input_box" @click="upImg('file_box_sf')">
               <img v-if="sfimageUrl" :src="sfimageUrl" class="avatar" >
               <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </div>
               <input type="file" accept="image/jpg,image/jpeg,image/png" name="" class="file_box file_box_sf" @change="showPreview($event,2)"> 
               <p class="top_wrod">{{sfWord}}</p>
           </div>
           <div class="isIos_wrap_te">
               <div class="input_box" @click="upImg('file_box_yh')">
               <img v-if="yhimageUrl" :src="yhimageUrl" class="avatar" >
               <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </div>
               <input type="file" accept="image/jpg,image/jpeg,image/png" name="" class="file_box file_box_yh" @change="showPreview($event,3)"> 
               <p class="top_wrod">{{yhWord}}</p>
           </div>
        </div>
        <div class="success_wrod" v-if="upStatus">
           身份证(正面)，身份证(反面)，银行卡已经保存完成！
         </div>
         <div class="tj" v-bind:class="{ gay: upStatus }" @click="upZlImg">
            提交
         </div>
         
      </div>
     <!--  <img class="dashImg2" style="width:100%;height:2px;" src="../images/dashline.png" /> -->

      <!-- <div class="bottomTitleView">
        <img class="bottomTitleBg" src="../images/titlebg.png" >
        <span class="bottomTitleText">理赔流程</span>
      </div> -->

     <!--  <div class="bottomInfo bottomInfoTe">
     
      </div> -->

  <!--      <div class="bottomInfo bottomInfoTeone">
        <div class="textItem3">
          <span>1、前往就近或熟悉的修理厂（4s店）进行定损</span>
        </div>
        <div class="textItem3">
          <span>2、定损时拨打保险公司电话</span><span class="red"> {{phoneData[targetVehicle.companyName]}} </span><span>进行定损咨询</span>
        </div>
        <div class="textItem3">
          <span>3、确定事故损失后，出具机动车辆保险车辆损失情况确认书等索赔材料</span>
        </div>
        <div class="textItem3">
          <span>4、将索赔材料递交我司</span>
        </div>
        <div class="textItem3">
          <span>5、我司完成材料审核后，支付赔款。并在支付赔款后，进行通知及回访</span>
        </div>
        <div class="textItem3">
          <span>如有疑问可拨打：</span><span class="red"> {{phoneData[targetVehicle.companyName]}} </span><span>进行咨询</span>
        </div>
      </div> -->
    </div>
    
  </div>
</template>

<script>

  import axios from 'axios'
  import phoneData from '../js/phoneData.js'
  export default {
    data() {
      return {
        szWord:"身份证(正面)",
        sfWord:"身份证(反面)",
        yhWord:"银行卡",
        upStatus:false,
        szDtata:{
          num:localStorage.getItem("num"),
          isTarget:1
        },
        yhimageUrl:"",
        sfimageUrl:"",
        szimageUrl:"",
        curDetail:"",//照片
        content:"",//理赔信息
        contentState:false,
        phoneData:phoneData,
        thirdPartyListState:false,
        plateNumber:"",
        claimMoney:"",
        src:"",
        lossList:[],
        lossState:false,
        val:true,
        url:"",
        username: "",
        valicode: "",
        userpwd: "",
        loginActive: false,
        detailData:{},
        claimInfo:{},
        targetVehicle: '',
        detailPhotoList:[],
        thirdPartyList:[],
        showSignFlag:false,
        context:null,
        signStatus:0,//签名状态
        signImgUrl:'',//签名地址
        agreeThird:1,
        surveyOrderNo:'',
        colors: ['#fef4ac','#0018ba','#ffc200','#f32f15','#cccccc','#5ab639'],
        brushs: [{
          className: 'small fa fa-paint-brush',
          lineWidth: 3
        },{
          className: 'middle fa fa-paint-brush',
          lineWidth: 6
        },{
          className: 'big fa fa-paint-brush',
          lineWidth: 12
        }],
        context: {},
        imgUrl: [],
        canvasMoveUse: true,
        preDrawAry: [],
        nextDrawAry: [],
        middleAry: [],

      }
    },
    created(){
      var surveyNo = this.$route.query.num;
      localStorage.setItem("num",surveyNo);
      this.getDetailData();
      console.log(phoneData)
    },
    mounted() {
    },
    watch: {

    },
    methods: {
      upZlImg(){
        if(this.upStatus){
            return
        };
        if(!this.szimageUrl){
           this.$message({
                message: '请选择身份证正面照片',
                type: 'error'
              });
           return
        }
        if(!this.sfimageUrl){
           this.$message({
                message: '请选择身份证反面照片',
                type: 'error'
              });
           return
        }
         if(!this.yhimageUrl){
           this.$message({
                message: '请选择银行卡照片',
                type: 'error'
              });
           return
        }
        var data = {
                      num:localStorage.getItem("num"),
                      idCardFrontPhoto:this.szimageUrl,
                      idCardBackPhoto:this.sfimageUrl,
                      bankCardPhoto:this.yhimageUrl

                     }
          axios.post(this.ajaxUrl+'/small_claim/v1/savePhoto',data)
          .then(response => {
            if(response.data.rescode == 200){
              this.upStatus = true;
              this.$message({
                message: '资料保存成功',
                type: 'success'
              });
               //this.$router.push({path:'/small/?num='+this.$store.state.surveyNo})
            }else{
              this.$message({
                message: '资料保存失败',
                type: 'error'
              });
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      showPreview(e,type){
        var file = e.target.files[0];
         var that = this;
         if(type == 1){
            that.szWord = "读取中...";
         };
         if(type == 2){
            that.sfWord = "读取中...";
         };
         if(type == 3){
            that.yhWord = "读取中...";
            
         };
         if(window.FileReader) {  
                var reader = new FileReader(); 
                var bas = reader.readAsDataURL(file);   
                reader.onloadend = function (e) {
                  console.log(e.target.result);
                  if(type == 1){
                     that.szimageUrl = e.target.result;
                     that.szWord = "身份证(正面)";
                  };
                  if(type == 2){
                     that.sfimageUrl = e.target.result;
                     that.sfWord = "身份证(反面)";
                  };
                  if(type == 3){
                     that.yhimageUrl = e.target.result;
                     that.yhWord = "银行卡";
                     
                  };
                  //$(".img").attr("src",e.target.result);    //e.target.result就是最后的路径地址
                  };    
             } 

      },
      upImg(str){
        $('.'+str).trigger("click");
      },
      showSignDiv(){
        this.$router.push({path:'/signName',query:{key:1}});

      },
      changeAgreeThird(){
        if(this.agreeThird == 0){
          this.agreeThird = 1

        }else{
          this.agreeThird = 0
        }
      },
      gotolink: function(id,item){
        var licenseNo = item.licenseNo;
        var idStr = String(id).replace('photoButton','');
        // alert(this.detailPhotoList.length)
        if(idStr=='0'){
          if(this.detailPhotoList.length == 0) {
            this.$message({
                message: '此车暂无照片',
                type: 'error'
              });
          }else{
            localStorage.setItem(licenseNo,JSON.stringify(item.photoList));
            this.$router.push({path:'/photoList/'+licenseNo});
          }
        }else{
           console.log(item,444444444444)
          if(item.photoList.length == 0){
             this.$message({
                message: '此车暂无照片',
                type: 'error'
              });
          }else{
            console.log(item.detailPhotoList,66666666)
            localStorage.setItem(licenseNo,JSON.stringify(item.photoList));
            this.$router.push({path:'/photoList/'+licenseNo});
          }
        }
      },
      open2() {
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
      },
      open4(resdes) {
        this.$message.error(resdes);
      },
      getLossList(str){
         // var str = "1-2-3-4-5-6-7";
         var arr = str.split('-');
         var zarr = ["正前部","左前部","右前部","左中部","正后部","左后部","右后部","右中部"];
         var barr = [];
         for(var i = 0; i < arr.length;i++){
            barr.push(zarr[arr[i]-1])
         };
         return barr
      },
      changeLossList(obj){
        //var obj = [{damagedPart:"1-2-3-4-5-6-7",licenseNo:"1",claimAmount:10},{damagedPart:"1-2-3-4-5-6-7",licenseNo:"1",claimAmount:10}]
        var plateNumber = "";
        var claimMoney = "";
         for(var i = 0; i < obj.length;i++){
             obj[i].damagedPart = this.getLossList(obj[i].damagedPart);
             if(obj[i].licenseNo != this.targetVehicle.licenseNo){
                plateNumber += obj[i].licenseNo;
                claimMoney += "￥" + obj[i].claimAmount;
                // console.log(claimMoney)
             }
             
         };
         this.plateNumber = plateNumber;//车牌
         this.claimMoney = claimMoney;//理赔金
         this.claimInfo = obj //理赔信息集合
         // console.log(obj,44444444444)
      },
      getDetailData(){
        var surveyNo = localStorage.getItem("num");
        //var surveyNo = 'bf633a50097b4bfa894d8ea652b0e99b';
        //alert(localStorage.getItem("num"))
        console.log(surveyNo,6666666666666)
        var paramData = {
          'num': surveyNo
        }
        this.$store.commit('setSurveyNoActive',surveyNo);
        axios.post(this.ajaxUrl+'/small_claim/v1/query',paramData)
          .then(response => {
            // console.log(response,77777777777777)
            if(response.status == 200){

              //  // 理赔指引
              // this.content =  response.data.claimsGuidelines;//理赔信息
              // if(!this.content){
              //    this.contentState = true;
              //    $(".bottomInfoTeone").removeClass("hide");
              //    $(".bottomInfoTe").addClass("hide");
              // }else{
              //   this.contentState = false;
              //   $(".bottomInfoTeone").addClass("hide");
              //   $(".bottomInfoTe").removeClass("hide");
              // };
              // this.content = this.content.replace(/#phone#/g,phoneData[response.data.targetVehicle.companyName]);
              // console.log(this.content,"111111111111")
              // $(".bottomInfoTe").html(this.content);
              // console.log(response.data.curDetail,"照片")
              //
              // this.curDetail = response.data.curDetail;//照片
              //
              if(response.data.smallClaim.isSendPhoto){
                    this.upStatus = true;
              }else{
                   this.upStatus = false;
              };
              this.detailData = response.data.detail;//基本信息
              console.log(this.detailData,4566)
              this.targetVehicle = response.data.targetVehicle;//标的车信息
              console.log(response.data,"标的车信息")
              this.detailPhotoList = response.data.targetVehicle.photoList;//标的车图片列表
              this.thirdPartyList = response.data.thirdPartyList;//第三方车辆信息
              if(this.thirdPartyList.length == 0){
                   this.thirdPartyListState =  false;
              }else{
                  this.thirdPartyListState =  true;
              }
              this.lossState = response.data.smallClaim.claimInfo ? true:false;
              this.signStatus = response.data.smallClaim.status;
              // this.signStatus = 0
              this.signImgUrl = response.data.smallClaim.signUrl;
              // this.agreeThird = 3 ;
              this.agreeThird = response.data.smallClaim.type;
              if(this.lossState){
                this.changeLossList(response.data.smallClaim.claimInfo);
              }
              
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
    },
    components: {
    },
  };
</script>

