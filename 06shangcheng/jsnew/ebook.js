
var eBook =function() {
	Base.call(this,arguments)
	this.author = ''      //作者
	this.publisher= ''    //出版社
	this.publishDate = ""  //出版时间
	this.pages = 0         //页数
    this.type = 'it-前端开发'//分类
}
	
	
eBook.prototype = new Base();
 //试读
eBook.prototype.readTry = function() {

}
 //畅读
eBook.prototype.readAll = function() {

}
eBook.prototype.buy = function() {

}
 //放入书架
eBook.prototype.addCart = function() {

}
 //绑定基本信息数据
eBook.prototype.bindDOMDetail = function() {
 	//拼接形式
 	var str = '';
 	str+='<h1>'+this.name+'</h1>'
 	str+='<ul class="rating">'
 		str+='<li><a href="#" id="buyCount">'+this.buySum+'</a>人购买</li>'
 		str+='<div class="clearfix"></div>'
 	str+='</ul>'
 	str+=' <div class="price_single">'
 		str+='<span class="reducedfrom" id="price">$'+this.normalPrice+'</span>'
 		str+='<span class="actual" id="groupPrice">$'+this.youhuijia+'</span><a href="#">优惠价</a>'
 	str+='</div>'
 	str+='<h2 class="quick">作者:</h2>'
 	str+='<p class="quick_desc" >'+this.author+'</p>'
 	str+='<h2 class="quick">出版日期:</h2>'
 	str+='<p class="quick_desc" >'+this.publishDate+'</p>'
 	str+='<h2 class="quick">出版社:</h2>'
 	str+='<p class="quick_desc" >'+this.publisher+'</p>'
 	str+='<h2 class="quick">页数:</h2>'
 	str+='<p class="quick_desc" >'+this.pages+'</p>'
 	str+='<h2 class="quick">分类:</h2>'
 	str+='<p class="quick_desc" >'+this.type+'</p>'

 	$('.bookdetail').html(str)                 
 }
eBook.prototype.init = function() {
	this.bindDOMDetail();
	this.bindDOMImage();
}