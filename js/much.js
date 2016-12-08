(function(){
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;
	html.style.fontSize = hWidth/6.4 + "px";
})()
var head = document.getElementById("head");
 var day = 4;
 var hour = 3;
 var minute = 45;
 var second = 23;
 var timer = setInterval(function(){
 	second--
 	if(second == 0){
 		minute--;
 		second = 60;
 	}else if(minute == 0){
 		hour--;
 		minute = 60;
 	}else if(hour == 0){
 		day--;
 		hour = 12;
 	}else{
 		"出错了"
 	}
 	head.innerHTML = "<span>活动距离剩余时间:"+day+"天"+hour+"时"+minute+"分"+second+"秒</span>"
 },1000)


var mySwiper = new Swiper('.swiper-container',{
	pagination : '.swiper-pagination',
	autoplay:3000
})
 