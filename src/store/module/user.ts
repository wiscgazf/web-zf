/**
 * @Descripttion: user
 * @version: 1.0.0
 * @Author: zf
 * @Date: 2021-05-18 11:14:37
 * @LastEditors: zf
 * @LastEditTime: 2021-05-18 11:14:37
 */

// .d.ts
interface Iany {
    [propName: string]: string;
}

interface IUserInfo {
    name: string;
    age: number | null;
}

export interface IState {
    userInfo: IUserInfo;
}

// initState ======================================================================
const initState: IState = {
    userInfo: {
        name: '',
        age: null
    }
};

// types 声明 ======================================================================
export const Types: Iany = {
    UPDATE_USER: 'UPDATE_USER'
};

// 用户触发动作 声明 ======================================================================
export const actions = {
    updateUserInfo: (data: IUserInfo) => ({ type: Types.UPDATE_USER, data })
};

// 用户触发动作 声明 ======================================================================
const userReducer = (state = initState, action: { type: string; data: IUserInfo }) => {
    switch (action.type) {
        case Types.UPDATE_USER: {
            return { ...state, userInfo: action.data };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
