/**
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-17 19:22:06
 * @LastEditors: zf
 * @LastEditTime: 2021-05-17 19:22:06
 */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = (props) => {
    return (
        <div>
            <h2>这是首页</h2>
            <Link to="/list">
                <h2>跳转列表页</h2>
            </Link>
        </div>
    );
};

export default Home;
