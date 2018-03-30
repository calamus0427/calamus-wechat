<template>
  <div class="container" @click="clickHandle('test click', $event)">
  <canvas-bg></canvas-bg>
  <time-line :data="comicData"></time-line>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div> -->


    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->

  </div>
</template>

<script>
import itemList from '@/components/itemList'
import timeLine from '@/components/timeLine'
import card from '@/components/card'
import canvasBg from '@/components/canvasBg'

export default {
  data () {
    return {
      motto: 'Hello World',
      cell: '111',
      userInfo: {},
      comicData:[
  {
    'id': '1',
    'name': '命运石之门0',
    'date': '2018-04-11',
    'path': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3913842313,40473722&fm=27&gp=0.jpg',
    'description': '最爱'
  }, {
    'id': '2',
    'name': '纯金属狂潮 4',
    'date': '2018-04',
    'path': 'http://dmimg.5054399.com/allimg/171130/41_171130184805_1.jpg',
    'description': '最爱'
  }, {
    'id': '3',
    'name': '食戟之灵',
    'date': '2018-04',
    'path': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=15596822,3055393332&fm=27&gp=0.jpg',
    'description': '最爱'
  }, {
    'id': '4',
    'name': '刀剑神域',
    'date': '2018-04',
    'path': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2859500531,3225586698&fm=27&gp=0.jpg',
    'description': '最爱'
  },{
    'id': '4',
    'name': '东京食尸鬼：Re',
    'date': '2018-04',
    'path': 'http://dmimg.5054399.com/allimg/171216/41_171216121955_3.jpg',
    'description': '最爱'
  }
]
    }
  },

  components: {
    card,
    itemList,
    timeLine
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
