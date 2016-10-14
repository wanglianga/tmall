var  banner=getClass("banner-ctr")[0];
var  banner1=getClass("banner")[0];
var  img=banner.getElementsByTagName('a');
var  list=getClass("banner-ctr-btn")[0];
var  li=list.getElementsByTagName('li');
var  bannerbox=getClass("banner-center")[0];
var  bannerbg=getClass("banner-center1");
// var  bnrbgarr=["#e8e8e8","#ececec","#ebf4f9","#f2e3ff","#067d69"];
var num=0;
function change(){
    num++;
    if (num>=img.length) {
    	num=0;
    }
    for (var i = 0; i < img.length; i++) {
    	animate(img[i],{opacity:0},1000);
    	li[i].style.background="#a2a2a2";
        bannerbg[i].style.display="none";
       
    	
    }   animate(img[num],{opacity:1},1000);
    	li[num].style.cssText="width:18px;height:18px;border:1px solid #a2a2a2;background:#f1f1f1;opacity:0.6";
        bannerbg[num].style.display="block";
        

}       
var t=setInterval(change,2000);

banner1.onmouseover=function(){
	clearInterval(t);
}
banner1.onmouseout=function(){
    t=setInterval(change,2000);
}
for (var i = 0; i < li.length; i++) {
	li[i].aa=i;
	li[i].onclick=function(){
		for (var j = 0; j < img.length; j++) {
		animate(img[j],{opacity:0},1000);
        li[j].style.background="#a2a2a2";
        bannerbg[j].style.display="none";
       
		}
		animate(img[num],{opacity:1},1000);
        li[this.aa].style.cssText="width:18px;height:18px;border:1px solid #a2a2a2;background:#f1f1f1;opacity:0.6";
        bannerbg[num].style.display="block";
	    num=this.aa;
	}
    li[i].onmouseover=function(){
        for(var k=0;k<img.length;k++){
        animate(img[k],{opacity:0},1000);
        li[k].style.background="#a2a2a2";
        bannerbg[k].style.display="none";
        }
        animate(img[num],{opacity:1},1000);
        li[this.aa].style.cssText="width:18px;height:18px;border:1px solid #a2a2a2;background:#f1f1f1;opacity:0.6";
        bannerbg[num].style.display="block";
        num=this.aa;
       
    }

	
}