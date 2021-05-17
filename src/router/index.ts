/**
 * @Descripttion: index
 * @version: 1.0.0
 * @Author: zfs
 * @Date: 2021-05-17 11:09:31
 * @LastEditors: zf
 * @LastEditTime: 2021-05-17 11:09:31
 */

import loadable from '@/components/loadable';
// import React from 'react';

export interface RouteItem {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
    redirect?: string;
}

export type RouteList<T = RouteItem> = T & { routes?: RouteList<T>[] };

const route: RouteList[] = [
    {
        path: '/',
        component: loadable('/home/Index'),
        exact: true
    },
    {
        path: '/list',
        component: loadable('/list/Index'),
        // redirect: '/new/list',
        // exact: true,
        routes: [
            {
                path: '/list',
                component: loadable('/list/index/Index'),
                exact: true
            },
            {
                path: '/list/:id',
                component: loadable('/list/detail/Index'),
                exact: true
            }
        ]
    }
];

export default route;
