import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { observer,inject } from 'mobx-react';

import Header from '../components/Header';
import NewComerBoard from '../components/NewComerBoard';
import NewComerInfo from '../components/NewComerInfo';
import NewComerIntro from '../components/NewComerIntro';
import NewComerBar from '../components/NewComerBar';

@inject('Home','About')
@observer
class NewComer extends Component {
    constructor(props){
        super(props);
        this.state={
            num:0,
        };
        this.clk=this.clk.bind(this);
    }
	componentDidMount(){
        // this.getData();
		document.title= '新手福利';
        window.scrollTo(0,0);

        setTimeout(()=>{
            this.setState({
                num:40
            })
        },500)
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
            <div className="page newcomer hastop">
                <Header>新手福利</Header>
                <NewComerBoard num={this.state.num} />
                <h1 className="newcomertip">出借完成实时匹配借款项目，撮合放款成功次日开始计息</h1>
                <NewComerInfo />
                <NewComerIntro />
                <NewComerBar />
            </div>
        );
    }
}

export default NewComer;
