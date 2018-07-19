import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NewComerBar = props => (
    <div className="newcomerbar">
        <h1>最低500，以100的倍数递增</h1>
        <Link to="/Home">立即出借</Link>
    </div>
);

export default NewComerBar;
