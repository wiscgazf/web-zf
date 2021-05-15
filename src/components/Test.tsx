import React, { useState } from 'react';
import { Button } from 'antd';

const Test = () => {
    const [date, setDate] = useState<number>(10);

    function addbtn() {
        setDate((preState: number) => {
            return preState + 1;
        });
    }

    return (
        <div>
            <Button type="primary" onClick={addbtn}>
                +1
            </Button>
            <span>{date}</span>
        </div>
    );
};

export default Test;
