window.onscroll = function(){
	var hei = document.documentElement.scrollTop;
	var nav = document.getElementsByClassName('nav')[0];
	var navA = nav.getElementsByTagName('a');
	var navLi = nav.getElementsByTagName('li');

	if (hei>=40) {
		nav.style.position = 'fixed';
		nav.style.top = '0px';
		nav.style.background = '#fff';
	}else{
		nav.style.position = 'static';
		nav.style.background = '';
		nav.style.top = '';
	}

	
	if (hei<=200) {
		navA[0].style.color = 'orange';
		navLi[0].style.borderBottom = '2px solid orange'
		for(var i = 0;i < navA.length;i++){

			if(i==0){
				continue;
			}
			navA[i].style.color = '';
			navLi[i].style.borderBottom = '2px solid transparent';
		}
	}else if(hei>200 && hei<=600){
		navA[1].style.color = 'orange';
		navLi[1].style.borderBottom = '2px solid orange';
		for(var i = 0;i < navA.length;i++){
			if(i==1){
				continue;
			}
			navA[i].style.color = '';
			navLi[i].style.borderBottom = '2px solid  transparent';
		}

	}else if(hei>600 && hei<=1000){
		navA[2].style.color = 'orange';
		navLi[2].style.borderBottom = '2px solid orange';
		for(var i = 0;i < navA.length;i++){
			if(i==2){
				continue;
			}
			navA[i].style.color = '';
			navLi[i].style.borderBottom = '2px solid transparent';
		}
	}else if(hei>1000 && hei<=1400){
		navA[3].style.color = 'orange';
		navLi[3].style.borderBottom = '2px solid orange';
		for(var i = 0;i < navA.length;i++){
			if(i==3){
				continue;
			}
			navA[i].style.color = '';
			navLi[i].style.borderBottom = '2px solid transparent';
		}
	}else{
		navA[4].style.color = 'orange';
		navLi[4].style.borderBottom = '2px solid orange';
		for(var i = 0;i < navA.length;i++){
			if(i==4){
				continue;
			}
			navA[i].style.color = '';
			navLi[i].style.borderBottom = '2px solid  transparent';
		}
	}


	//个人简历
	var grImg = document.getElementsByClassName('gerenjianli-bot')[0].getElementsByTagName('img')[0];
	var grDiv = document.getElementsByClassName('gerenjianli-bot')[0].getElementsByTagName('div')[0];

	if (hei >= 200) {
		grImg.style.left = '0px';
		grDiv.style.right = '0px';
		
	}
	//求学和工作
	var qiuXue = document.getElementsByClassName('qiuxuehegongzuo-bot')[0].getElementsByClassName('qiuxuehegongzuo-bot-qiuxue')[0];
	var gongZuo = document.getElementsByClassName('qiuxuehegongzuo-bot')[0].getElementsByClassName('qiuxuehegongzuo-bot-gongzuo')[0];

	if (hei >= 600) {
		qiuXue.style.left = '0px';
		gongZuo.style.right = '0px';
	}
	//个人技能
	var lis = document.getElementsByClassName('zhuanyejineng-left')[0].getElementsByTagName('li');
	var zjImg = document.getElementsByClassName('zhuanyejineng')[0].getElementsByTagName('img')[0];
	if (hei>=1000) {
		lis[0].style.left = '0px';
		lis[1].style.right = '0px';
		lis[1].style.zIndex = '1';
		lis[2].style.left = '0px';
		lis[2].style.top = '0px';
		lis[3].style.zIndex = '1';
		lis[3].style.top = '0px';
		zjImg.style.bottom = '0px';
		zjImg.style.zIndex = '1';
		zjImg.style.right = '0px';
	}
	//我都作品
	var list = document.getElementsByClassName('wodezuopin')[0].getElementsByTagName('li');
	
	
	for(var i = 0;i < list.length;i++){
		list[i].style.left = '-300px'
	}

	if (hei >= 1400) {
		list[0].style.left = '0px';
		list[1].style.left = '250px';
		list[2].style.left = '500px';
		list[3].style.left = '0px';
		list[3].style.top = '180px';
		list[4].style.left = '250px';
		list[4].style.top = '180px';
		list[5].style.left = '500px';
		list[5].style.top = '180px';
		
	}
	//联系我
	var callList = document.getElementsByClassName('callme')[0].getElementsByTagName('li');	
	var p = document.getElementsByClassName('callme')[0].getElementsByTagName('p')[0];

	for(var i = 0;i < callList.length;i++){
		callList[i].style.left = '-400px';
	}
	if (hei >= 1800) {
		callList[0].style.left = '0px';
		callList[1].style.left = '200px';
		callList[2].style.left = '400px';
		p.style.left = '274px';	
	}

}

window.onload = function(){
	var person = document.getElementsByClassName('person')[0].getElementsByTagName('span')[0];
	var div = document.getElementsByClassName('person')[0].getElementsByTagName('div')[0];
	var p = document.getElementsByClassName('person')[0].getElementsByTagName('p')[0];
	
	person.style.top = '0px';
	div.style.top = '160px';
	div.style.left = '138px';
	p.style.left = '-276px';
	p.style.bottom = '80px';



}