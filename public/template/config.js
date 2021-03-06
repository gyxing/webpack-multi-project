//模版对应文件的内容
module.exports = {
    addConfigJS(project_root_name, project_name) {
        return `const path = require("path");
/**
 * 本项目需要用到的个别配置
 * @param env 命令行传过来的环境参数
 * @param options 扩展参数 方便增加参数
 */
module.exports = function(env, options) {
    return {
        entry: {
            index: path.resolve(__dirname, "./src/main.js")
        },
        index_title: "Demo",
        html_name: "",
        template: "",
        product_dir: path.resolve(__dirname,"../../dist/${project_root_name}/${project_name}"),
        product_html_dir: path.resolve(__dirname,"../../dist/${project_root_name}/${project_name}"),
        product_public_path: "",
        plugins: [],
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    };
};
        `
    },
    addMainJS() {
        return `import Vue from 'vue';
import App from './App.vue';
import '@PUBLIC/less/reset.less';

import Promise from 'promise-polyfill';
window.Promise = Promise;

new Vue({
    el: "#app",
    render: h => h(App)
});`
    },
    addAppVue() {
        return `<template>
    <div>Hello World</div>
</template>

<script>
export default {
	name: "App"
}
</script>

<style lang="less" scoped>
</style>`
    }
};