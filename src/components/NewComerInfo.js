import React, { Component } from 'react';

import img from '../assets/images/indicate.png'

const NewComerInfo = props => (
    <div className="newcomerinfo">
        <img src={img} alt=""/>
        <ul>
        	<li>
        		<b>今日出借</b>
        		<span>募集期1-3日</span>
        	</li>
        	<li>
        		<b>进入锁定期</b>
        		<span>撮合放款次日</span>
        	</li>
        	<li>
        		<b>自动退出</b>
        		<span>锁定期满结束</span>
        	</li>
        	<li>
        		<b>回款到帐</b>
        		<span>退出后1-3日</span>
        	</li>
        </ul>
        <h1>锁定期结束自动发起债权转让，本金及回报一般1-3日内返还至您的账户</h1>
    </div>
);

export default NewComerInfo;
