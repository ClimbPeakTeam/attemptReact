import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state={
        };
        this.back=this.back.bind(this);
    }
    componentDidMount(){
        
    }
    back(){
        window.history.back();
    }
    render() {
        return (
            <header className="header">
                <i onClick={this.back}></i>
                <h1>{this.props.children}</h1>
            </header>
        );
    }
}

export default Header;
