import React, { Component } from 'react';

const Progress = props => {
	let n=props.num;
	if(n<13) n=13;
	else if(n>88) n=88;
	return (
	    <div className="progress">
	        <h5><span style={{left:n+'%'}}>已完成 {props.num}%</span></h5>
	        <h6><span style={{width:props.num+'%'}}></span></h6>
	    </div>
	);
};

export default Progress;
