import React, { Component } from 'react';
// import { HashRouter,Route,Switch } from 'react-router-dom';
// import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import { BrowserRouter,Route } from 'react-router-dom';
// import Loadable from 'react-loadable';
import AnimatedRouter from 'react-animated-router';
import 'react-animated-router/animate.css';

// import MyLoadingComponent from '../components/MyLoadingComponent';

import Home from '../views/Home';
import About from '../views/About';
import NewComer from '../views/NewComer';
/*let routers={};
window.routers=routers;
routers.Home = Loadable({
    loader: () => import('../views/Home'),
    loading: MyLoadingComponent
});
routers.About = Loadable({
    loader: () => import('../views/About'),
    loading: MyLoadingComponent
});*/

// import Pan from '../views/Pan';

class Routers extends Component {
	componentDidMount(){
        // 去除splash
        let el=document.getElementById('splash'); //html标签
        // let rootDom=document.getElementById('splash');
        el.className='loaded';
        setTimeout(()=>{
            if(!!el) el.remove();
        },600);
    }
    componentWillReceiveProps(nextProps){
        // console.log('页面路由',nextProps)
    }
	render() {
        return (
            <BrowserRouter>
                <AnimatedRouter>
                {/*<Switch>*/}
	                <Route exact path="/" component={NewComer}></Route>
	                <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/newcomer" component={NewComer}></Route>

                    {/*<Route exact path="/myOrderDetail/:id" component={MyOrderDetailPage}></Route>
                    <Route exact path="/myRepair" component={RepairPage}></Route>
                    <Route exact path="/myRefundsDetail/:id" component={RefundsDetail}></Route>
                    <Route exact path="/myRepairDetail/:id" component={RepairDetail}></Route>
                    <Route exact path="/applyRepair" component={ApplyRepair}></Route>*/}

	            {/*</Switch>*/}
                </AnimatedRouter>
            </BrowserRouter>
        );
    }
};

export default Routers;