var Cloth = function() {
	Base.call(this,arguments)
	this.size =['x','m','l','xl']
	this.colors = ['yellow','pink','blue','red']
}

Cloth.prototype = new Base();
//绑定基本元素
//详细信息重写
Cloth.prototype.bindDOMDetail=function(){
	$('#pname').html(this.name)
    $('#description').html(this.description)
    $('#price').html(this.normalPrice)
    $('#groupPrice').html(this.youhuijia)
    $('#buyCount').html(this.buySum)
}
//尺寸重写
Cloth.prototype.bindSize=function(){
	var str=""
	str+='<h3>尺寸</h3>'
	for(var i=0;i<this.size.length;i++){
		str+='<li><a href="#">'+this.size[i]+'</a></li>'
	}
	$('.sizes').html(str)                        
}
//颜色重写
Cloth.prototype.bindColors=function(){
	var str=''
	str='<h3>颜色</h3>'
	for(var i=0;i<this.colors.length;i++){
		str+='<li><a href="#">'+this.colors[i]+'</a></li>'
	}
	$('.colors').html(str)              
}
Cloth.prototype.init=function(){
	this.bindDOMDetail()
	this.bindColors()
	this.bindSize()
	this.bindDOMImage()
}