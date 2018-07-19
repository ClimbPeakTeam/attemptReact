const vwcheck=()=>{
	const el=document.createElement('DIV'),w=document.documentElement.clientWidth,dpr=window.devicePixelRatio,fw=w*dpr,fs=fw*0.0375;
	el.style='height:0;width:5vw;';
	document.body.appendChild(el);
	
	if(el.clientWidth===document.body.clientWidth) document.documentElement.style=`font-size:${fs}px`;
	if(dpr>1) document.getElementById('meta').setAttribute('content',`width=${fw}, initial-scale=${1/dpr}, maximum-scale=${1/dpr}, user-scalable=0`);

	el.remove();
};

vwcheck();

export default vwcheck;