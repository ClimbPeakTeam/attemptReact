import axios from 'axios';

// axios.defaults.baseURL='/api/v1/ws/wechat/';
axios.defaults.widthCredentials=true;
// axios.defaults.timeout=5000;

// axios拦截器
/*axios.interceptors.request.use(config=>{
    config.setHeaders([
        openId:88888888,
        userId:88888888,
    ]);
    return config;
});
axios.interceptors.response.use(response=>{
    // if(response.data)
    console.log('request',response)
})*/

const ax = (url='',para={},callback,mask) => {
    if(para.mask) window.popalert.waitstart();
    let param={abc:123,...para};
    if(!!param.axType) delete param.axType;
    if(!!param.mask) delete param.mask;
    // console.log('para',para)
    return new Promise((resolve,reject)=>{
        axios({
            baseURL:'/api/v1/ws/wechat/',
            url:url,
            method:para.axType || 'post',
            data:para.axType!=='get' ? param : null,
            params:para.axType==='get' ? param : null,
            headers: {openId:88888888,userId:88888888},
            timeout: 5000,
        }).then(res=>{
            // console.log(res);
            // resolve(res);
            if(res.status===200){
                if(res.data.success){
                    resolve(res.data.data);
                }
                else {
                    if(para.mask) setTimeout(()=>{
                        window.popalert.fade(res.data.errorMsg);
                    },300);
                    else window.popalert.fade(res.data.errorMsg);
                    reject(res.data.errorMsg);
                }
            }
            else {
                if(para.mask) setTimeout(()=>{
                    window.popalert.fade(res.status+'错误');
                },300);
                else window.popalert.fade(res.status+'错误');
                reject(res.status+'错误');
            }
            if(para.mask) window.popalert.waitend();
        }).catch(err=>{
            window.popalert.fade('网络错误，请稍后重试')
            reject(err);
            if(para.mask) window.popalert.waitend();
        });
    })
};

export default ax;