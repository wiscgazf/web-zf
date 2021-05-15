import React from 'react';
import logo from '@/assets/images/logo.svg';
import { Button } from 'antd';
import Test from '@/components/Test';

import Appcss from './App.module.less';

function App() {
    return (
        <div className={Appcss.App}>
            <Button type="primary">你好</Button>
            <Test />
            <img src={logo} alt="" />
        </div>
    );
}

export default App;
