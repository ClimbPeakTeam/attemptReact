import React, { Component } from 'react';

import Progress from './Progress';

const NewComerBoard = props => (
    <div className="newcomerboard">
        <h1><b>9.00</b>%</h1>
        <h2>期待年化回报率</h2>
        <h3>锁定期限 1个月<span>剩余金额 979.500元</span></h3>
        <Progress num={props.num} />
    </div>
);

export default NewComerBoard;
