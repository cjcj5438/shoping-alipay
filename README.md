# 项目生命周期:
## onLaunch 项目初始化
## onShow 页面展示
## onHide 页面隐藏
## onError 程序报错

# page的生命周期函数
## onLoad 页面加载时执行
## onReady 页面初次渲染完成,每个页面只执行一次

## onHide onShow 页面显示隐藏
## onUnload 页面卸载执行一次;
## onTitleClick() 点击标题事件
## onReachBottom() 页面触底  事件
## 开启下拉刷新 
```
// json
{
  "pullRefresh":true 
}
```
onPullDownRefreash()

# flex容器排序

# 动画

# 缓存
my.setStorage({key ,data})异步缓存  my.setStorageSync({})同步缓存 
my.setStorage({key}) 
my.removeStorage({key,cb})
my.clearStorage();