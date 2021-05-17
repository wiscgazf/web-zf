/**
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-17 19:22:33
 * @LastEditors: zf
 * @LastEditTime: 2021-05-17 19:22:33
 */

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Detail: FC = () => {
    return (
        <div>
            <h1>这是详情页</h1>
            <Link to="/">
                <h3>返回首页</h3>
            </Link>
        </div>
    );
};

export default Detail;
