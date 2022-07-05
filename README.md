### 使用说明

[详细使用方法请看这里](https://juejin.cn/post/7021027165294559245)

+ 安装依赖

```
npm install
OR
yarn
```

+ 修改`/config.js`下的`cookie`以及`PUSH_PLUS_TOKEN`

config.js
```
module.exports = {
  cookie: '',
  PUSH_PLUS_TOKEN: '',
  aid: '',
  uuid: '',
  _signature: ',
  DING_TALK_TOKEN: '', // 钉钉webhook参考（很简单）：https://open.dingtalk.com/document/group/custom-robot-access
  uid: '', // *自动玩游戏需要此参数，在掘金首页打开控制台输入这行代码`window.__NUXT__.state.auth.user.id`就可以得到
}
```

+ 本地测试

```
npm run dev
```

+ 部署腾讯云函数自动运行

