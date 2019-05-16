Page({
  data: {},
  onLoad() { },
  searchItems(e) {
    var itemName = e.detail.value;
    my.navigateTo({
      // searchType 通过文字类型去查找，itemName通过输入文本去查找
      url: "/pages/query/list/list?searchType=words&itemName=" + itemName
    });
  }
});
