/**
 * @Descripttion: user
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-19 12:01:46
 * @LastEditors: zf
 * @LastEditTime: 2021-05-19 12:01:46
 */

import { axios } from '@/utils';

export const home = (params: any) => axios.get('/home/login', params);
