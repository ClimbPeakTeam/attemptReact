import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer,inject } from 'mobx-react';

// import Header from '../components/Header';

@inject('About')
@observer
class About extends Component {
    constructor(props){
        super(props);
        this.state={
            html:'',
        };
        this.clk=this.clk.bind(this);
    }
	componentDidMount(){
        /*let para={axType:'get'}
        window.ax('findCaseCategoryAllList',para,(data)=>{
            console.log(data)
            console.log(this.state.title)
        },true);*/
		document.title= '招商加盟';
        window.scrollTo(0,0);

        // window.routers.Home.preload();
	}
    componentWillUnmount(){
        
    }
    clk(){
        this.props.About.act(1)
    }
    render() {
        return (
            <div className="page home">
                {/*<div className="htmlcontainer" dangerouslySetInnerHTML={{__html:this.state.html}}></div>*/}
                <h1>这是About页</h1>
                <h2>status:{this.props.About.status}</h2>
                <Link to="/home">跳转</Link>
                <button onClick={this.clk}>++</button>
                <div>{this.state.html}</div>
            </div>
        );
    }
}

// export default inject('About')(observer(About));
export default About;
