/**
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-17 19:22:06
 * @LastEditors: zf
 * @LastEditTime: 2021-05-17 19:22:06
 */
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { actions, IState } from '@/store/module/user';
import { Link, withRouter, RouterProps } from 'react-router-dom';

import './Index.less';

const Home: FC<RouterProps> = (props) => {
    // 是否有离开的提示
    const [status, setStatus] = useState(true);

    // dispatch
    const dispatch = useDispatch();

    // 用户信息
    const userInfo = useSelector(({ user }: { user: IState }) => user.userInfo);
    console.log(userInfo);

    const unBlock = props.history.block(() => {
        if (status) {
            return false;
        }
        return unBlock();
    });

    return (
        <div className="home">
            <h2>这是首页</h2>
            {userInfo.name && (
                <ul>
                    <li>姓名：{userInfo.name}</li>
                    <li>年龄：{userInfo.age}</li>
                </ul>
            )}
            <Link to="/list">
                <h2>跳转列表页</h2>
            </Link>
            <Button onClick={() => setStatus(false)}>离开页面提示</Button>
            <hr />
            <Button
                type="primary"
                onClick={() => dispatch(actions.updateUserInfo({ name: '周飞', age: 18 }))}
            >
                更新用户信息
            </Button>
        </div>
    );
};

export default withRouter(Home);
