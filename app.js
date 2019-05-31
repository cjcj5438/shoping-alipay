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
  // 构建全局不可变商品对象，{商品对象， 购买数， 是否选中}
  finalCartItem(item, counts, isSelect) {
    var finalCartItem = new Object();
    finalCartItem.item = item;
    finalCartItem.counts = counts;
    finalCartItem.isSelect = isSelect;
    return finalCartItem;
  },

  // 根据商品id获取购物车中某个商品的件数
  fetchItemCounts(cartItemIdArray, itemId) {
    for (var i = 0; i < cartItemIdArray.length; i++) {
      var item = cartItemIdArray[i];
      if (item != null && item != undefined && itemId == item.itemId) {
        return item.counts;
      }
    }
  },

  // 获取购物车中某个商品是否选中的状态
  fetchItemIsSelect(finalCartItemList, itemId) {
    for (var i = 0; i < finalCartItemList.length; i++) {
      var item = finalCartItemList[i].item;
      if (item != null && item != undefined && itemId == item.id) {
        return finalCartItemList[i].isSelect;
      }
    }
  },

  // 获取购物车中的某个商品对象信息
  fetchItemFromFinalList(finalCartItemList, itemId) {
    for (var i = 0; i < finalCartItemList.length; i++) {
      var item = finalCartItemList[i].item;
      if (item != null && item != undefined && itemId == item.id) {
        return item;
      }
    }
  },









  name: 'chenjing',
  book: { a: 1, b: 'vvv' },
  say() {
    // console.log('say')
  }
});
