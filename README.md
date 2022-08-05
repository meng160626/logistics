# transportation

## Project info
> 编辑器：VS Code
> 框架：uni-app

## Project create
> 使用npm搭配vue-cli
```
vue create -p dcloudio/uni-preset-vue 'project name'
```

## Project setup
在`package.json`中添加配置
```json
"scripts": {
    "devDependencies": {
        "sass": "^1.49.8",          // 如使用其他版本可能因为版本过高导致启动服务失败
        "sass-loader": "^8.0.2",    // 如使用其他版本可能因为版本过高导致启动服务失败
    }
}
```

```
npm install
```
[uView-ui推荐通过HBuilderX引入插件方式添加](https://www.uviewui.com/components/install.html)

在`package.json`中添加配置

```json
"scripts": {
  "serve:wx": "npm run dev:mp-weixin",
  "dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
}
```



## Project run

```
npm run serve:wx
```
在`微信开发者工具`导入项目:路径为dist\dev\mp-weixin
即可热更新

### VS Code 开发插件
#### uni-app-schemas
> 校验 uni-app 中的 androidPrivacy.json、pages.json 和 manifest.json 格式

#### uni-app-snippets
> uni-app 基本能力代码片段

#### uni-create-view
> 快速创建uniapp视图与组件
> 可以创建分包组件
