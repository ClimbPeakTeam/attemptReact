import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer,inject } from 'mobx-react';

// import Header from '../components/Header';

import logo from '../assets/images/logo.png'

@inject('Home','About')
@observer
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            html:'',
        };
        this.clk=this.clk.bind(this);
    }
	componentDidMount(){
        this.getData();
		document.title= '招商加盟';
        window.scrollTo(0,0);
	}
    componentWillUnmount(){
        
    }
    getData(){
        let para={id:17,mask:true};
        window.ax('findCustomerQuestionCategoryList',para).then(data=>{
            console.log('data',data)
        })
    }
    clk(){
        this.props.Home.act(1)
    }
    render() {
        return (
            <div className="page home">
                {/*<div className="htmlcontainer" dangerouslySetInnerHTML={{__html:this.state.html}}></div>*/}
                <h1>这是Home页</h1>
                <h2>status:{this.props.Home.status}</h2>
                <Link to="/about">跳转</Link>
                <button onClick={this.clk}>++</button>
                <img src={logo} alt=""/>
            </div>
        );
    }
}

export default Home;
