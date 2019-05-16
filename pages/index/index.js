const app = getApp();
Page({
  onLoad(query) {
    // 页面加载
    // console.log(app)
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
    this.initData();
  },

  initData() {
    var me = this;

    // 请求轮播图
    my.request({
      url: app.serverUrl + '/index/carousels',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      // data: { name: 'jack', age:'18' },
      dataType: 'json',
      success: function (res) {
        console.log(res);
        // 获取拿到后端的数据
        var myData = res.data;
        if (myData.status == 200) {
          var carousels = myData.data;
          // 把新的数据重新覆盖数据绑定中的原有的值
          me.setData({
            carousels: carousels
          });
        }
      },
      fail: function (res) {
        console.log("发生错误：" + res);
      },
      complete: function (res) {
        console.log("最终执行的complete：" + res);
      }
    });


    // 请求推荐商品列表
    my.request({
      url: app.serverUrl + '/index/items/rec',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        console.log(res);
        // 获取拿到后端的数据
        var myData = res.data;
        if (myData.status == 200) {
          var featuresList = myData.data;
          // 把新的数据重新覆盖数据绑定中的原有的值
          me.setData({
            featuresList: featuresList
          });
        }
      }
    });

    // 请求新品列表
    my.request({
      url: app.serverUrl + '/index/items/new',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        console.log(res);
        // 获取拿到后端的数据
        var myData = res.data;
        if (myData.status == 200) {
          var newItemList = myData.data;
          // 把新的数据重新覆盖数据绑定中的原有的值
          me.setData({
            newItemList: newItemList
          });
        }
      }
    });
  },
  // 推荐商品跳转到商品详情页面;
  showItem(e) {
    //  data-itemId  提取页面参数的东西
    var itemId = e.target.dataset.itemId;
    my.navigateTo({
      url: "/pages/query/item/item?itemId=" + itemId
    });
  },

  // 轮播跳转相当于是 在分类页面查询
  showItemList(e) {
    var itemId = e.target.dataset.itemId;
    var catId = e.target.dataset.catId;
    var searchType = e.target.dataset.searchType;

    if (searchType == 1) {
      my.navigateTo({
        url: "/pages/query/item/item?itemId=" + itemId
      });
    } else if (searchType == 2) {
      my.navigateTo({
        url: "/pages/query/list/list?searchType=cat&catId=" + catId + "&catName=搜索结果"
      });
    }
  },






  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    this.initData();
    // console.log('下拉刷新了')
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
