/**
 * @Descripttion: loadable
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-17 11:14:04
 * @LastEditors: zf
 * @LastEditTime: 2021-05-17 11:14:04
 */

import React from 'react';
import { Button } from 'antd';
import Loadable from 'react-loadable';

const Loading: any = (props: LoadableExport.LoadingComponentProps): any => {
    if (props.error) {
        return (
            <div>
                Error!{' '}
                <Button type="link" onClick={props.retry}>
                    Retry
                </Button>
            </div>
        );
    } else if (props.timedOut) {
        return (
            <div>
                Timeout! <Button onClick={props.retry}>Retry</Button>
            </div>
        );
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return <div />;
    }
};

const loadable = (path: string) => {
    return Loadable({
        loader: () => import(`@/container${path}`),
        loading: Loading,
        delay: 200,
        timeout: 10000
    });
};

export default loadable;
