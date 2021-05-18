/**
 * @Descripttion: index
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-18 14:36:15
 * @LastEditors: zf
 * @LastEditTime: 2021-05-18 14:36:15
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducers from './module';

const store =
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(thunk, logger))(createStore)(rootReducers)
        : createStore(rootReducers, applyMiddleware(thunk));

export default store;
