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

const List: FC = () => {
    return (
        <div>
            <h1>这是列表页</h1>
            <Link to="/list/123">跳转详情页</Link>
        </div>
    );
};

export default List;
