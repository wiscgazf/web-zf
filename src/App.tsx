import React from 'react';
import Test from '@/components/Test';

import Appcss from './App.module.less';

function App() {
    return (
        <div className={Appcss.App}>
            <Test />
        </div>
    );
}

export default App;
