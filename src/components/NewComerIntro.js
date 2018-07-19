import React, { Component } from 'react';

const NewComerIntro = props => (
    <div className="newcomerintro">
        <h1>项目简介</h1>
        <ul>
        	<li>
        		<b>项目名称</b>
        		<span>新手福利 XF1155611485</span>
        	</li>
        	<li>
        		<b>项目总额</b>
        		<span>1,000,000 元</span>
        	</li>
        	<li>
        		<b>还款方式</b>
        		<span>一次性还本付息</span>
        	</li>
        	<li>
        		<b>起投金额</b>
        		<span>最低500元，以100的倍数递增</span>
        	</li>
        </ul>
    </div>
);

export default NewComerIntro;
