var banner=document.getElementById('banner').getElementsByTagName('li');
var circle=document.getElementById('circle').getElementsByTagName('li');
var but1=document.getElementsByClassName('left')[0];
var but2=document.getElementsByClassName('right')[0];
console.log(but1);
var index=0;

// 封装函数
changeImg=function(){
	for(var i=0;i<banner.length;i++){
		banner[i].removeAttribute('class');
		circle[i].removeAttribute('class');
	}
	if(index<banner.length-1){
		index++;
	}else{
		index=0;
	}
	banner[index].setAttribute('class','active');
	circle[index].setAttribute('class','active');
}

// 轮播图和小方块。
var timer=setInterval(changeImg,3000);

// 给按钮绑定事件
but1.addEventListener("click",function(){
	clearInterval(timer);
	index-=2;
	if(index<-1){
		index=banner.length-2;
	}
	changeImg();
	timer=setInterval(changeImg,3000);
})
but2.addEventListener("click",function(){
	clearInterval(timer);
	changeImg();
	timer=setInterval(changeImg,3000);
})