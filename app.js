App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },

  // 定义常量
  serverUrl: "https://www.imoocdsp.com",
  // 构建全局购物车商品对象，{商品ID， 购买数}
  cartItem(itemId, counts) {
    var cartItem = new Object();
    cartItem.itemId = itemId;
    cartItem.counts = counts;
    return cartItem;
  },









  name: 'chenjing',
  book: { a: 1, b: 'vvv' },
  say() {
    // console.log('say')
  }
});
