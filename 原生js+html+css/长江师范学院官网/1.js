var banner=document.getElementsByClassName('content-banner_image')[0].getElementsByTagName('li');
var circle=document.getElementsByClassName('content-banner_circle')[0].getElementsByTagName('li');
var btnLeft=document.getElementsByClassName('content-banner_btn')[0];
var btnRight=document.getElementsByClassName('content-banner_btn')[1];
var index=0;

changeImg=function(){
	for(var i=0;i<circle.length;i++){
		banner[i].removeAttribute('class');
		circle[i].removeAttribute('class');
	}
		if (index<circle.length-1) {
			index++;
		}else{
			index=0;
		}
	
	banner[index].setAttribute('class','content-banner_image_active');
	circle[index].setAttribute('class','content-banner_circle_active');
}

var timer=setInterval(changeImg,2000)

for(var i=0;i<circle.length;i++){
	circle[i].addEventListener('click',function(){
		clearInterval(timer);
		index=this.value-1;
		changeImg();
		timer=setInterval(changeImg,2000);
})
}
btnLeft.addEventListener('click',function(){
	clearInterval(timer);
	index-=2;
	if (index<-1) {
		index=circle.length-2;
	}
	changeImg();
	timer=setInterval(changeImg,2000);
})
btnRight.addEventListener('click',function(){
	clearInterval(timer);
	changeImg();
	console.log(index)
	timer=setInterval(changeImg,2000);
})

