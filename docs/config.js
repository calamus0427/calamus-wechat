docute.init({
    //自定义sidebar
    // toc: './toc.md',
    landing: "landing.html",
    home: './introduce.md',
    vue:'/vue.md',
    announcement: {
        type: "danger", // warning | danger | success | primary
        html: '<a href="http://www.calamus.xyz">あやめ</a>'
    },
    sidebar: true,
    tocVisibleDepth: 3,
    marked: {
    smartypants: true
  },
    nav: [{
    path: '/',
    markdown: '## counter\n {{ count }}',
    component: {
      data() {
        return { count: 0 }
      }
    }
  },{
        title: "首页",
        path: "/introduce",
        source: 'introduce.md',
    }, 
      {
          title: '小程序框架', 
          type: 'dropdown', 
          items: [
                    {
                      title: 'mpvue',
                      path: 'mpvue'
                    },
                    {
                      title: 'wepy',
                      path : 'wepy'
                    }
                ]},
      {
        title: '小程序组件',
        type: 'dropdown',
        items: [{
            title: 'weui',
            path: 'weui'
          }
        ]
          },
          {
            title: "资源汇总",
            path: "/awosome",
            source: 'awosome.md'
          },
    ],
   icons: [{
        icon: 'github',
        label: 'Fork me on GitHub',
        link: 'https://github.com/calamus0427'
    },{
        icon: "link",
        label : "我的网站",
        link:"https://www.calamus.xyz"
    },{
        icon: "edit",
        label: "编辑此项",
        link:"https://github.com/calamus0427" 
    }]
});
