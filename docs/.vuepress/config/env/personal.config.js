/*
 * @Author: licc
 * @Date: 2021-10-13 14:21:53
 * @Last Modified by: licc
 * @Last Modified time: 2021-11-03 17:25:20
 * @Description 可根据主机名称等本机特征来自动获取相应的域名
 */

const os = require('os');
const personalConfig = {
    /**
        os.hostname() // 电脑主机名
        os.type() // 电脑类型
        IPv4 // 本机ip
     */
    hostname: os.hostname(),

    // 默认读取的配置项
    Developer() {
        return {
            username: 'VIDAA Developer',
            host: this.getHost() || 'localhost',
            port: 8088,
        };
    },

    // 这个对象，是由开发者自己添加的，可以在这里自定义一些个性化的东西，但【键名要跟你的主机名一样】
    'lichunchun-ex'() {
        return {
            username: 'Mr. Li Chunchun',
            type: os.type(),
            host: this.getHost(),
            port: 9624,
        };
    },

    getConfig() {
        return (
            (this[this.hostname] && this[this.hostname]()) || this['Developer']()
        );
    },

    getHost() {
        const interfaces = os.networkInterfaces();
        for (let devName in interfaces) {
            const interface = interfaces[devName];
            for (let i = 0; i < interface.length; i++) {
                const alias = interface[i];
                // console.log('======= alias:', JSON.stringify(alias, null, 4))
                if (
                    alias.family === 'IPv4' &&
                    alias.address !== '127.0.0.1' &&
                    !alias.internal
                ) {
                    return alias.address;
                }
            }
        }
    }
};

module.exports = personalConfig;
