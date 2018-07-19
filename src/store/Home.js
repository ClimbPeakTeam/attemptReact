import { observable,autorun,action } from 'mobx';

const store=observable({
    status:0,
    get state(){
        // 计算当前显示步骤
        let n;
        if(!this.status || this.status<=0) n=0;    // 无状态
        else if(this.status<5) n=1; // 收费
        else if(this.status<8) n=2; // 测量
        else if(this.status===8) n=3;   // 设计
        else if(this.status<19) n=4;    // 下单
        else if(this.status<22) n=5;    // 送货
        else if(this.status>21) n=6;    // 安装
        else n=0;   // 无状态
        return n
    },
    act(n){
        this.status+=n
        console.log(this.status)
    },
},{
    // status:observable,
    act:action
});

autorun(()=>{
    console.log('autorun home',store.status,store.state)
})

export default store;