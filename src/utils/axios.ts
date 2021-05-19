/**
 * @Descripttion: axios
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-19 11:37:56
 * @LastEditors: zf
 * @LastEditTime: 2021-05-19 11:37:56
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// const env: string = process.env.NODE_ENV;

// 本地开发环境
const baseURL = '//localhost:3003/mock';

// 创建实例
const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 30000
});

// 发送请求允许携带 cookie
instance.defaults.withCredentials = true;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});

// 响应拦截
instance.interceptors.response.use((response: AxiosResponse) => {
    const { data } = response;
    return data;
});

export default instance;
