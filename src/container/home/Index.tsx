/**
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-17 19:22:06
 * @LastEditors: zf
 * @LastEditTime: 2021-05-17 19:22:06
 */
import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { Link, withRouter, RouterProps } from 'react-router-dom';

const Home: FC<RouterProps> = (props) => {
    // 是否有离开的提示
    const [status, setStatus] = useState(true);

    const unBlock = props.history.block(() => {
        if (status) {
            return false;
        }
        return unBlock();
    });

    return (
        <div>
            <h2>这是首页</h2>
            <Link to="/list">
                <h2>跳转列表页</h2>
                <Button onClick={() => setStatus(false)}>离开页面提示</Button>
            </Link>
        </div>
    );
};

export default withRouter(Home);
