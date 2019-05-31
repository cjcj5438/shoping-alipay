Page({
  data: {
    emptyHidden: false,
    fullHidden: true,

    // 不可变商品列表，用于结算
    finalCartItemList: [],

    customUnSelectImg: "unselect",
    customSelectImg: "select",

    // 定义全选状态
    allSelectImg: "unselect",
    defaultSelectedAll: false,

    // 默认的合计金额
    totalAmount: 0,
    // 默认的结算件数
    cartItemNum: 0,

    // 预处理订单数据列表
    preOrderItemList: [],
  },
  onLoad() { },
    // 跳转到首页
  helpYourself() {
    my.switchTab({
      url: '/pages/index/index',
    });
  },
});
