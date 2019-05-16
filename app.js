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
  name:'chenjing',
  book:{a:1,b:'vvv'},
  say(){
    // console.log('say')
  }
});
