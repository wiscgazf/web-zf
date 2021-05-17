/**
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-17 19:22:33
 * @LastEditors: zf
 * @LastEditTime: 2021-05-17 19:22:33
 */

import React, { FC } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

const List: FC = (props: any) => {
    return (
        <Switch>
            {props.children}
            <Route component={() => <div>404 Page not Found!</div>} />
            props.redirect && <Redirect to={props.redirect} />
        </Switch>
    );
};

export default List;
