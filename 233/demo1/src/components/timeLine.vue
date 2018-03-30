<template>
<div>
    <div  class="timezone" v-for="(item,index) in data" :key='index'>
              <div @click="showDetail(item)" class="time" v-bind:style="{color:red}" >
                  <img :src="item.path" />
                  <div>
                      <p>{{item.name}}</p>
                      <ul>
                          <li class="date">{{item.date}}</li>
                      </ul>
                  </div>
              </div>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      msg: 'nihao'
    }
  },
  props: ['data'],
  computed: {
  },
  methods:{
    setDuration(){

    },
    showDetail(item){
      const url = '../logs/main'
      wx.navigateTo({ url })
    }
  }
}
</script>

<style>
            .timezone{
                width:6px;
                height: 100px;
                background: lightblue;
                margin-left:20px;
                margin-top:0px;
                border-radius: 3px;
                position: relative;
                -webkit-animation: heightSlide 2s linear;
            }
            @-webkit-keyframes heightSlide{
                0%{
                    height: 0;
                }
                100%{
                    height: 100px;
                }
            }
            .timezone:after{
                content: '未完待续...';
                width: 100px;
                color:#fff;
                position: absolute;
                margin-left: -35px;
                bottom: -30px;
                -webkit-animation: showIn 4s ease;
            }
            .timezone .time,.timezone .timeLeft{
                position: absolute;
                margin-left: -10px;
                margin-top:-10px;
                width:20px;
                height:20px;
                border-radius: 50%;
                border:4px solid rgba(255,255,255,0.5);
                background: lightblue;
                -webkit-transition: all 0.5s;
                -webkit-animation: showIn ease;
            }

            @-webkit-keyframes showIn{
                0%,70%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
            .timezone .time img,.timezone .timeLeft img{
                width:80px;
                height:80px;
                position: absolute;
                margin-left: -120px;
                margin-top: -30px;
                color:#eee;
                font-size: 14px;
                cursor:pointer;
                -webkit-animation: showIn 3s ease;
            }
            .timezone .time li,.timezone .timeLeft li{
              color:#dcffff;
              font-size:12px;
            }
            .timezone .timeLeft img{
                margin-left: 60px;
            }
            .timezone .time:hover,.timezone .timeLeft:hover{
                border:4px solid lightblue;
                background: lemonchiffon;
                box-shadow: 0 0 2px 2px rgba(255,255,255,0.4);
            }
            .timezone .time div,.timezone .timeLeft div{
                position: absolute;
                top:50%;
                margin-top: -25px;
                left:50px;
                width: 130px;
                min-height: 50px;
                background: lightblue;
                border:3px solid #eee;
                border-radius: 10px;
                z-index: 2;
                overflow: hidden;
                cursor:pointer;
                -webkit-animation: showIn 3s ease;
                -webkit-transition: all 0.5s;
            }
            .timezone .timeLeft div{
                left:-337px;
            }
            .timezone .time div:hover,.timezone .timeLeft div:hover{
                min-height: 10px;
            }
            .timezone .time div p,.timezone .timeLeft div p{
                color: #fff;
                font-weight: bold;
                text-align: center;
            }
            .timezone .time:before,.timezone .timeLeft:before{
                content: '';
                position: absolute;
                top:0px;
                left: 32px;
                width: 0px;
                height: 0px;
                border:10px solid transparent;
                border-right:10px solid #eee;
                z-index:-1;
                -webkit-animation: showIn 3s ease;
            }
            .timezone .timeLeft:before{
                left:-33px;
            }
            .timezone .time div ul,.timezone .timeLeft div ul{
                list-style: none;
                width:130px;
                padding:5px 0 0;
                border-top:2px solid #eee;
                color:#fff;
                text-align: center;
            }
            .timezone .time div li,.timezone .timeLeft div li{
                display: inline-block;
                height: 25px;
                line-height: 25px;
            }
</style>
