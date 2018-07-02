<style scoped>
  .caseDetail{
    background: rgba(0,0,0,0.3);
    width: 100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index:100;
  }
  .caseDetailBox{
    width: 1000px;
    margin: 10vh auto;
    background: #fff;
    padding: 20px;
    max-height: 76vh;
    position: relative;
  }
  .closCaseDetail{
    font-size: 42px;
    position: absolute;
    right: 15px;
    top: 0;
    cursor: pointer;
  }
  .detailContent{
    overflow-y: scroll;
    max-height: 65vh;
    overflow-x: hidden;
  }
  .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }
  .caseInfo{
    font-size: 14px;
    color: #232323;
    margin-top:15px;
  }
  .caseInfo i{
    padding-right: 20px;
    display:inline-block;

  }
  .chakanno, .baoxianNo{
    min-width: 25%;
  }
  .caseInfoBox{
    padding: 5px 0;
    text-align: left;
  }
  .AimCar{
    width: 100%;
    margin: 15px 0;
  }
  .aimheader{
    height: 30px;
    color: #fff;
    background: #2EAB3B;
    font-size: 15px;
    line-height: 30px;
    padding-left:15px;
  }
  .aimInfo{
    width: 100%;
  }
  .aimInfo .table{
    width:100%;
  }
  .aimInfo .table td{
    padding: 3px;
  }
  .aimCarImg{
    width: 100%;
    border: 1px solid #bbb;
    border-top: none;
    padding: 10px 0;
  }
  .aimCarImg ul{
    display: -webkit-box;
  }
  .aimCarImg li{
    width: 22%;
    padding:12px 0px;
    margin-left: 10px;
  }
  .aimCarImg img{
    width: 100%;
    height: 200px;
  }
  .aimCarImg span{
    font-size: 14px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(201,202,204,0.8);
    color: #232323;
    display: block;
    margin-top: -4px
  }
  .videoBox{
    text-align:center;
  }
.videoBox video{
  height: 200px;
  width: 30%;
  padding: 20px;

}
  /*video::-webkit-media-controls-enclosure {*/
    /*overflow:hidden;*/
  /*}*/
  /*video::-webkit-media-controls-panel {*/
    /*width: calc(100% + 30px);*/
  /*}*/
  .reporPerson img, .caseInfoBox img{
    padding-left: 7px;
    height: 16px;
    width: 14px;
  }
  .caseInfoBox img{
    padding-right:0;
  }
  .caseInfoBoxAdress{
    position: relative;
    display:inline-block;
    width: 50%;
  }
  .caseInfoBoxTitle{
    width: 70px;
    display: inline-block;
  }
  .caseInfoBoxInfo{
    position: absolute;
    left: 75px;
    top: 0;
  }
  .footerBox{
    text-align: center;
    margin: 40px;
    width: 100%;

  }
  .download,.cancel{
    display: inline-block;
    height:35px;
    width: 185px;
    color:#fff;
    background: #2EAB3B;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
  }
  .beizhuInfo{
    border: 1px solid #bbb;
    min-height:100px;
    width:100%;
    padding:10px 16px;
    font-size: 14px;
    line-height: 20px;
  }
</style>
<template>
  <div class="caseDetail">
    <div class="caseDetailBox">
      <span @click="closCaseDetail" class="right closCaseDetail">×</span>
      <div class="oneMonitor clear">
        <h4 class="dialogTitle">案件详情</h4>
        <div class="detailContent">
          <div class="caseInfo" id="caseInfo">
              <div class="caseInfoBox">
                <span>查勘号：</span><i class="chakanno">{{caseDetailData.accidentInfo .surveyNo }}</i>
                <span>保险报案号：</span><i class="baoxianNo">{{caseDetailData.accidentInfo .insuranceReportNo}}</i>
                <span>事故时间：</span><i >{{caseDetailData.accidentInfo .accidentTime }}</i>
              </div>
              <div class="caseInfoBox">
                  <i  v-if="caseDetailData.accidentInfo.surveyStatus == '06'">案件状态：待查勘</i>
                  <i  v-if="caseDetailData.accidentInfo.surveyStatus == '07'">案件状态：查勘中</i>
                  <i v-if="caseDetailData.accidentInfo.surveyStatus == '08'">案件状态：已查勘</i>
                  <i v-if="caseDetailData.accidentInfo.surveyStatus == '11'">案件状态：已取消</i>
                <div class="caseInfoBoxAdress" >
                  <span class="caseInfoBoxTitle" >事故地点：</span>
                  <div class="caseInfoBoxInfo">
                    <i style="display:inline-block;">{{caseDetailData.accidentInfo .accidentAddr}}</i>
                    <img @mouseenter="enter" @mouseleave="leave" src="../images/adress.png"/>
                    <div id="detailMap" class="hide" style="height:250px;width:250px;"></div>
                  </div>
                </div>
              </div>

              <div class="caseInfoBox" v-if="caseDetailData.accidentInfo.exceptionReason != null"><span>异常原因：</span><i>{{caseDetailData.accidentInfo.exceptionReason}}</i></div>
          </div>
          <div class="AimCar" v-if="beizhuActive">
            <div  class="aimheader">备注信息</div>
            <div class="aimInfo">
              <div class="beizhuInfo" style="">
                {{beizhuInfo}}
              </div>
            </div>
          </div>
          <div class="AimCar">
            <div class="aimheader">标的车</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>车牌号:</td><td>{{caseDetailData.reportVehicleInfo.vehicleLicenseNo}}</td><td>车主姓名:</td><td>{{caseDetailData.reportVehicleInfo.reporterName}}</td><td>车主电话: </td><td>{{caseDetailData.reportVehicleInfo.reporterPhoneNo}}</td></tr>
                <tr><td>保险公司:</td><td> {{caseDetailData.reportVehicleInfo.insuranceCompanyName}}</td><td>保险公司城市： </td><td>{{caseDetailData.reportVehicleInfo.insuranceCompanyCity}}</td><td> 处理机构：</td><td>{{caseDetailData.reportVehicleInfo.processOrgName}}</td></tr>
              </table>
              <div class="aimCarImg" v-if="totalCountAim != 0">
                <ul id="scaleImg">
                  <li v-for="item in recordsImg">
                    <img :data-src="item.photoUri" :src="item.smallPhotoUri">
                    <br>
                    <span>{{item.photoTypeComment}}</span>
                  </li>
                </ul>
                <div class="phonesPaging">
                  <el-pagination  @current-change="handleCurrentChangeAim"
                                  :current-page="1"
                                  :page-size = "pageSizeAim"
                                  layout="prev,next"
                                  :total="totalCountAim">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="thirdCar AimCar" v-if="thirdActive" v-for="(item,index) in thirdCar">-->
          <div class="thirdCar AimCar" v-if="thirdActive" v-for="(item,index) in thirdCar">
            <div class="aimheader">三者车({{item.vehicleLicenseNo}})</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>车牌号:</td><td>{{item.vehicleLicenseNo}}</td><td>车主电话: </td><td v-if="item.contactPhoneNo == null"> 暂无</td><td v-else>{{item.contactPhoneNo}}</td></tr>
              </table>
              <div class="aimCarImg thirdImg"  v-if="item.thirdCarImg.length!=0">
                <ul class="suibian">
                  <li v-for="itemImg in item.thirdCarImg">
                    <img :data-src="itemImg.photoUri" :src="itemImg.smallPhotoUri"/>
                    <br>
                    <span>{{itemImg.photoTypeComment}}</span>
                  </li>
                </ul>
                <div class="phonesPaging" @click="getCarNo(item.vehicleLicenseNo)" >
                  <el-pagination  @current-change='handleCurrentChangethird'
                                  :current-page="1"
                                  :page-size = "4"
                                  layout="prev,next"
                                  :total="item.total">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <div class="thirdCar AimCar " v-if="caseDetailData.surveyVideoRooms.length != 0">
            <div class="aimheader">查勘现场视频</div>
            <!--<div v-if="showFlash">-->
              <!--<h1>Alternative content</h1>-->
              <!--<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p>-->
            <!--</div>-->
            <div class="aimInfo videoBox">
              <div id="videoList" class="clear" v-if="showOldActive">
                <div class="left" v-for="(item,index) in surveyVideoRooms" :id='"video"+index' style="width:280px;height:200px;margin:6px 10px;"  :swfobjId='"videourl"+index'></div>
              </div>
              <div class="videoList clear" v-else>

                <div class="left vid-wrapper" id="videoBox" v-for="(item,index) in surveyVideoRooms"   >
                  <video  controls="controls" :src="item.videoRoomId" type="video/mp4"  style="width:280px;height:200px;margin:6px 10px;">
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div class="AimCar reporPerson" v-if="caseDetailData.sceneSurveyorInfo != null">
            <div class="aimheader">查勘员信息</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0" >
                <tr><td>现场查勘员:</td><td @click="mapRouter()">{{caseDetailData.sceneSurveyorInfo.sceneSurveyorName}}<img src="../images/adress.png"/></td><td>现场查勘员电话:</td><td>{{caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo}}</td><td>预计到达时间:</td><td>{{caseDetailData.sceneSurveyorInfo.expectArriveTime}}</td>
                  <td>实际到达时间</td><td>{{caseDetailData.sceneSurveyorInfo.actualArriveTime}}</td></tr>
                <tr v-if="webSurveyorInfoActive"><td> 后台坐席: </td><td>{{caseDetailData.webSurveyorInfo.webSurveyorName}}</td><td>处理开始时间: </td><td>{{caseDetailData.webSurveyorInfo.startProcessTime}}</td><td>处理结束时间:</td><td>{{caseDetailData.webSurveyorInfo.endProcessTime}}</td><td></td><td></td></tr>
              </table>
              <div style="width:100%;height:300px;margin:0 auto" class="mapBox hide">
                <div style="width:100%;height:300px;margin:0 auto"  id="mapContent" > </div>
              </div>

            </div>
          </div>
          <div class="footerBox">
            <span class="download" @click="downLoadCase" v-if="caseDetailData.accidentInfo.surveyStatus == '08'">下载</span>
            <span class="cancel" @click="cancelCase" v-if="caseDetailData.accidentInfo.surveyStatus == '07' || caseDetailData.accidentInfo.surveyStatus == '06'">取消订单</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import Viewer from 'viewerjs';
import axios from 'axios'
export default {
  data() {
      return{
        beizhuActive: false,
        beizhuInfo: "",
        city: "",
        currentPageNoAim: 1,//当前页码
        pageSizeAim: 4,//每页记录数
        totalCountAim: 0,//总条数
        recordsImg: [],//标的车图片
        caseDetailData: {},
        recordsThird: [],
        surveyNo: "",
        thirdCar: [],
        accidentVehicleInfos:[],
        siStatusText: '',
        webSurveyorInfoActive: false,
        thirdActive: false,
        longitude: "",
        latitude: "",
        ViewerAimActive: false,
        coordinates: [],
        mark: '',
        surveyId: '',
        thirdvehicleLicenseNo: "",
        surveyVideoRooms: [],
        showFlash: false
      }
    },
  watch:{

  },
    created(){
       this.caseDetailData =  JSON.parse(localStorage.getItem("caseDetailData"));
       this.longitude = this.caseDetailData.accidentInfo.accidentAddrLongitude;
       this.latitude = this.caseDetailData.accidentInfo.accidentAddrLatitude;
       this.city = this.caseDetailData.accidentInfo.cityCode;
       if(this.caseDetailData.sceneSurveyorInfo != null){
         this.coordinates = this.caseDetailData.sceneSurveyorInfo.coordinates;//经纬度轨迹数组
       }
       this.mark = this.caseDetailData.accidentInfo.appSource;
       this.surveyId = this.caseDetailData.id;
       this.surveyVideoRooms = this.caseDetailData.surveyVideoRooms;
      for(let i in this.surveyVideoRooms){
        var indexof = this.surveyVideoRooms[i].videoRoomId.indexOf("http:");
        console.log(indexof)
        if(indexof > -1){//新数据
          this.showOldActive = false;
        }else{//老数据
          this.showOldActive = true;
        }
      }
       if(this.caseDetailData.sceneSurveyorInfo != null){
           if(this.caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo === null){
             this.caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo = '暂无'
           }
           if(this.caseDetailData.sceneSurveyorInfo.expectArriveTime === null){
             this.caseDetailData.sceneSurveyorInfo.expectArriveTime = '暂无'
           }
           if(this.caseDetailData.sceneSurveyorInfo.expectArriveTime === null){
             this.caseDetailData.sceneSurveyorInfo.expectArriveTime = '暂无'
           }
          if(this.caseDetailData.sceneSurveyorInfo.actualArriveTime === null){
             this.caseDetailData.sceneSurveyorInfo.actualArriveTime = "暂无"
          }
       }
       if(this.caseDetailData.accidentVehicleInfos === null){
         this.thirdActive = false;
       }else{
         this.thirdActive = true;
       }
       if(this.caseDetailData.webSurveyorInfo === null){
         this.webSurveyorInfoActive = false;
       }else{
         this.webSurveyorInfoActive = true;
         if(this.caseDetailData.webSurveyorInfo.webSurveyorName === null){
           this.caseDetailData.webSurveyorInfo.webSurveyorName = "暂无"
         }
         if(this.caseDetailData.webSurveyorInfo.startProcessTime === null){
           this.caseDetailData.webSurveyorInfo.startProcessTime = '暂无'
         }
         if(this.caseDetailData.webSurveyorInfo.endProcessTime === null){
           this.caseDetailData.webSurveyorInfo.endProcessTime = '暂无'
         }
       }
       this.surveyNo = this.caseDetailData.accidentInfo.surveyNo;
       this.getBeizhu()
       if("reportVehicleInfo" in this.caseDetailData){
        this.getCasePhones(1,4,this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,this.surveyNo,"")
       }
        this.accidentVehicleInfos = this.caseDetailData.accidentVehicleInfos;
       if(this.accidentVehicleInfos !== null){
         for(let i in this.accidentVehicleInfos){
           this.accidentVehicleInfos[i].thirdCarImg = [];
           this.getCasePhones(1,4,this.accidentVehicleInfos[i].vehicleLicenseNo,this.surveyNo,i)
         }
       }
    },
    mounted() {
      if(this.showOldActive){
        this.$nextTick(() => {
          this.getvedio()
        })
      }
    },
    props: {
//      caseOrder: string
    },
      methods: {
        getBeizhu(){
          $(".beizhuDiolag").removeClass("hide");
          var data = {
            'surveyNo':this.surveyNo,
          }
          axios.post(this.ajaxUrl+"/survey-detail/v1/query/note",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data != '' || response.data.data != null){
                  this.beizhuInfo = response.data.data.noteContent;
                  this.beizhuActive = true;
                }
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        },
        getvedio(){
          if(this.surveyVideoRooms.length!=0){
           this.$nextTick(() => {
              for(let i in this.surveyVideoRooms){
                var swfobj = new SWFObject('https://union.bokecc.com/flash/player.swf', "videourl"+ i, '100%', '200', '8');
                swfobj.addVariable("userid", "F08A8B432F24065A");	//	partnerID,用户id
                swfobj.addVariable("videoid", this.surveyVideoRooms[i].videoRoomId);	//	spark_videoid,视频所拥有的 api id
                swfobj.addVariable("mode", "api");	//	mode, 注意：必须填写，否则无法播放
                swfobj.addVariable("autostart", "false");	//	开始自动播放，true/false
                swfobj.addVariable("jscontrol", "true");	//	开启js控制播放器，true/false
                swfobj.addParam('allowFullscreen', 'true');
                swfobj.addParam('allowScriptAccess', 'always');
                swfobj.addParam('wmode', 'transparent');
                swfobj.write("video" + i);
              }
//             for(let i in this.surveyVideoRooms){
//                console.log($("video"+i).html())
//                if($("video"+i).html()){
//                    this.showFlash = false;
//                }else{
//                  this.showFlash = true;
//                }
//             }
            })
          }

        },
        open4(resdes) {
          this.$message.error(resdes);
        },
        open2(resdes) {
          this.$message.success(resdes);
        },
        getCarNo(vehicleLicenseNo){
         this.thirdvehicleLicenseNo =  vehicleLicenseNo
        },
        handleCurrentChangethird(currentPage){
          for(let i in this.accidentVehicleInfos){
            if(this.thirdvehicleLicenseNo == this.accidentVehicleInfos[i].vehicleLicenseNo){
              this.getCasePhones(currentPage,4,this.thirdvehicleLicenseNo,this.surveyNo,i)
            }
          }
        },
        handleCurrentChangeAim(currentPage) {//跳转
          //当前页改变调用接口 currentPage   pageSizeAim
          this.currentPageNoAim = currentPage;
          this.getCasePhones(this.currentPageNoAim,4,this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,this.surveyNo,"")
        },
        getCasePhones(currentPageNo,pageSize,vehicleLicenseNo,surveyNo,source){
          var paramData = {
            "currentPageNo": currentPageNo,
            "pageSize": pageSize,
            "vehicleLicenseNo": vehicleLicenseNo,
            "surveyNo": surveyNo
          }
          axios.post(this.ajaxUrl+"/survey-detail/v1/photo/page",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                  if(source == ""){
                    this.recordsImg = response.data.data.records;
                    this.totalCountAim = response.data.data.total;
                    this.$nextTick(() => {
                      new Viewer(document.getElementById('scaleImg'), {
                        url: 'data-src',
                        navbar:false,
                        toolbar:true,
                        loop: true
                      })
                    })
                  }else{
                    var thirdLength = this.accidentVehicleInfos.length;
                    for(let i in this.accidentVehicleInfos){
                        if(i == source){
                          this.accidentVehicleInfos[i].thirdCarImg = [];
                          for(let j in response.data.data.records){
                            this.accidentVehicleInfos[i].thirdCarImg.push(response.data.data.records[j])
                          }
                          this.accidentVehicleInfos[i].total = response.data.data.total;
                          this.accidentVehicleInfos[i].pageNum = response.data.data.pageNum;
                        }
                    }
                      this.$nextTick(() => {
                        this.thirdCar = ''
                        this.thirdCar = this.accidentVehicleInfos;
                        for (let i in this.thirdCar) {
                          this.$nextTick(() => {
                            new Viewer(document.getElementsByClassName('suibian')[i], {
                              url: 'data-src',
                              navbar: false,
                              toolbar: true,
                              loop: true
                            })
                          })
                        }
                      })
                  }
              }else{

              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        },
        closCaseDetail(){
          $(".caseDetail").addClass("hide")
          this.$store.commit('setCaseDetailActive', false)
        },
        enter(){
          $("#detailMap").removeClass("hide")
          var map = new BMap.Map("detailMap");
          map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
          map.enableScrollWheelZoom(true);

          // 用经纬度设置地图中心点
            if(this.longitude != "" && this.latitude!= ""){
              map.clearOverlays();
              var new_point = new BMap.Point(this.longitude,this.latitude);
              var marker = new BMap.Marker(new_point);  // 创建标注
              map.addOverlay(marker);              // 将标注添加到地图中
              map.panTo(new_point);
            }
        },
        leave(){
          $("#detailMap").addClass("hide")
        },
        mapRouter(){
          var data = this.coordinates;
          var num = 0;

          for(let i in data){
            if(data[i].longitude === null){
              num++
            }
          }
          if(num == 0){
            $(".mapBox").toggleClass("hide");
            if($('.mapBox').attr('class').indexOf('none') < 0){
              var map = new BMap.Map("mapContent");
              var length = data.length;
              map.enableScrollWheelZoom(true);
              var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
              for(var i =0;i<length;i++){
                driving.search(new BMap.Point(data[0].longitude,data[0].latitude),new BMap.Point(data[length-1].longitude,data[length-1].latitude));
              }
              driving.setSearchCompleteCallback(function() {
                //得到路线上的所有point
                data = driving.getResults().getPlan(0).getRoute(0).getPath();
                //画面移动到起点和终点的中间
                var centerPoint;
                centerPoint = new BMap.Point((data[0].longitude + data[data.length - 1].longitude) / 2, (data[0].latitude + data[data.length - 1].latitude) / 2);
                map.panTo(centerPoint);
                //连接所有点
                map.addOverlay(new BMap.Polyline(data, {strokeColor: "#f00", strokeWeight: 5, strokeOpacity: 1}));
              })
            }
          }else{
            this.open4("暂无查勘员信息")
          }

        },
        downLoadCase(){
          var  surveyId = parseInt(this.surveyId)
          window.open(this.ajaxUrl+"/survey-detail/v1/download/"+surveyId)
        },
        cancelCase(){
          var paramData = {
            "action": "cancel",
            "surveyno": this.surveyNo,
            "mark": this.mark,
            "city": this.city
          }
          axios.post(this.ajaxUrl+"/pub/survey/v1/action",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                this.open2(response.data.resdes);
                this.$store.commit('setCaseDetailActive', false);//关闭详情组件组件
                this.$store.commit('getcaseListActive', true)//调用列表接口
              }else{
                if(response.data.rescode == "300"){
                  this.$router.push({path:"/"})
                }
                this.open4(response.data.resdes);
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
        },
      components: {
      },
    }
</script>
