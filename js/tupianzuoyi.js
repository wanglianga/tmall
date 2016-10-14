function tupianzuoyi(img){
      img.onmouseover=function(){
      	img.style.right="5px";
      }
      img.onmouseout=function(){
      	img.style.right="0";
      }
}
var qingziimg=$(".qingzisgimg");

for(var i=0;i<qingziimg.length;i++){
	tupianzuoyi(qingziimg[i]);
}