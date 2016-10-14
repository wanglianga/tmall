
var remenli=getClass("remenli");
var zhezhao=getClass("zhezhao");
for (var i = 0; i < remenli.length; i++) {
	remenli[i].bb=i;   //把
	remenli[i].onmouseover=function(){           
		this.bb;   //this.bb=box[i].bb=i   
		zhezhao[this.bb].style.display="block";    //zhezhao[this.bb]=zhezhao[i]
	}
	remenli[i].onmouseout=function(){
		this.bb;
		zhezhao[this.bb].style.display="none";
	}
}