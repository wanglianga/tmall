var qingzibox=$(".floorimg");
var leftfloor=$(".leftfloor")[0];
var leftfloorli=leftfloor.getElementsByTagName('li');
var colorarr=["#f7a945","#19c8a9","#f15453","#64c333","#0cc6e8","#ea5f8d","#000000"];     // 定义一个数组存储背景颜色
var gundongkuang=$(".gundongkuang")[0];
var flagdown=1;
var flagup=2;
document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?
	document.documentElement:document.body;               //获取滚轮到浏览器可视区域的TOp值的兼容函数                  // 在浏览器title显示obj.scrollTop值
var now=0;
window.onscroll=function(){
	for (var i = 0; i < qingzibox.length; i++) {             //遍历qingzibox
		if (qingzibox[i].offsetTop<=obj.scrollTop+100) {         //判断qingzibox[0]的scrollTop值与obj.scrollTop值
			now=i;
			for (var j = 0; j < leftfloorli.length; j++) {         //遍历leftfloorli 实现跳出当前img值时 背景颜色变回原来的
				leftfloorli[j].style.background="#626262";
			}
			leftfloorli[i].style.background=colorarr[i];
		}
		else{
			leftfloorli[i].style.background="#626262";
	    }
	}
	if(obj.scrollTop>=800){
        if (flagdown==1) {
        	animate(gundongkuang,{top:0},500);
        	flagdown=2;
        }
		
	}
	else {
		if (flagup==2) {
			animate(gundongkuang,{top:-50},500);
			flagdown=1;
		}
		
	}
	if (obj.scrollTop>=1600) {
		animate(leftfloor,{width:36,height:333},400);
	}
	else{
		animate(leftfloor,{width:0,height:0},400);
	}
}
for (var i = 0; i < leftfloorli.length; i++) {
	leftfloorli[i].cc=i;
	leftfloorli[i].onclick=function(){	
		now=this.cc;
		animate(obj,{scrollTop:qingzibox[this.cc].offsetTop-100},400);
		leftfloorli[now].style.background=colorarr[now];
	}
	leftfloorli[i].onmouseover=function(){
		for (var j = 0; j < leftfloorli.length; j++) {
			if(now!=j){
               leftfloorli[j].style.background="#626262";
			}
		}
		this.style.background=colorarr[this.cc];
	}
	leftfloorli[i].onmouseout=function(){
		for (var j = 0; j < leftfloorli.length; j++) {
			if(now!=j){
               leftfloorli[j].style.background="#626262";
			}
		}
	}
	
}