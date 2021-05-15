import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, Empty } from 'antd';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 国际化
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

// polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN} renderEmpty={() => Empty}>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
