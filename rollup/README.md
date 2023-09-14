# 封装案例
> 组件封装模版

[项目地址](https://github.com/NightSquirrl/drop-upload-react)

## 初始化
```shell
npm init vite@latest

# 需要的依赖
"@rollup/plugin-typescript": "^11.1.2",
"rollup-plugin-babel": "^4.4.0",
"@rollup/plugin-babel": "^6.0.3",
"@rollup/plugin-commonjs": "^25.0.3",
"@rollup/plugin-node-resolve": "^15.1.0",
"typescript": "^5.0.2",
"rollup": "^2.79.1",
"rollup-plugin-auto-external": "^2.0.0",
"rollup-plugin-copy": "^3.4.0",
"rollup-plugin-peer-deps-external": "^2.2.4",
"rollup-plugin-postcss": "^4.0.2",
"sass": "^1.64.1",
"tslib": "^2.6.1",
"@babel/core": "^7.22.17",
```
对于 UI 组件的封装,直接复制 rollup 文件夹,只需要修改 types 里面的引入既可
打包命令 `    "build:lib": "rimraf dist && npx rollup -c rollup/rollup.config.js"`

本地测试:
先进行打包,然后将打包后的文件 dist 修改为任意的名称 xxx,然后进入到该目录,执行 npm link,此时会将该包添加到全局,在需要使用的项目中通过 npm link xxx
