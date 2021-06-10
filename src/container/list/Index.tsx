/**
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-17 19:22:33
 * @LastEditors: zf
 * @LastEditTime: 2021-05-17 19:22:33
 */

import React, { FC, useState, useMemo } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import ContextWrap from './test';

const List: FC = (props: any) => {
    const [val, setVal] = useState([1, 2, 3]);

    const data = useMemo(() => {
        return { val };
    }, [val]);

    return (
        <ContextWrap.Provider value={data}>
            <button onClick={() => setVal((preVal) => [...preVal, preVal.length + 1])}>
                add val
            </button>
            <Switch>
                {props.children}
                <Route component={() => <div>404 Page not Found!</div>} />
                props.redirect && <Redirect to={props.redirect} />
            </Switch>
        </ContextWrap.Provider>
    );
};

export default List;
