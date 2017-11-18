window.onload = function(){
//1.获取元素
	function $(id) {return document.getElementById(id)};
	var js_slider = $("js_slider");
	var slider_main_block =$("slider_main_block");
	var imgs = slider_main_block.children;
	var slider_ctrl=$("slider_ctrl");

//2.动态生成span
	for(var i=0;i<imgs.length;i++){
		var span = document.createElement("span");
		span.className = "slider-ctrl-con";
		span.innerHTML=imgs.length-i;   //利用innerHTML给每个span标注内容
		slider_ctrl.insertBefore(span,slider_ctrl.children[1]);  //插入元素此时用inserBfore
	}

//3.获取所有的span，包括左右箭头，和新生成的6个span
	var spans = slider_ctrl.children;
	spans[1].className = "slider-ctrl-con current";

//4.得到每次需要移动距离，也就是每张图片大小
	var scrollWidth = js_slider.clientWidth;
	for(var i=1;i<imgs.length;i++){
		imgs[i].style.left =scrollWidth+"px";//从第二张图片开始遍历，每张图片都移动一个left（照片宽度）（i=1，而不是i=0开始）
	}
//5.定义一个变量，控制图片张数
	var iNow=0;  

//6.利用for in遍历span数组
	for(var k in spans){
//7.span点击事件，分三种情况；左箭头span，右箭头span，中间6个span
		spans[k].onclick = function(){
//左span的情况，点击之后，当前图片向右移动一距离，+scrollWidth;当前图片右移之后，iNow先自减，得到的新值跟0进行比较，
//如果小于0 ，说明刚移动的是第一张图片，此时，令iNow直接等于最后一张图片的索引号（imgs.length-1),
//让新的imgs[iNow]迅速到左边，也就是left为-scrollWidth，
//迅速到左边之后，直接做缓动动画，移动到当前位置。
			if(this.className == "slider-ctrl-prev"){
				//alert("hah");
				animate(imgs[iNow],{left:scrollWidth});
				--iNow<0?iNow=imgs.length-1:iNow;   
				imgs[iNow].style.left= -scrollWidth+"px";
				animate(imgs[iNow],{left:0});
				setSquare();
			}
//右span的情况，点击之后，当前图片向左移动一距离，-scrollWidth;当前图片左移之后，iNow先自加，得到的新值跟最大的索引号进行比较，
//如果大于imgs.length ，说明刚移动的是最后一张图片，此时，令iNow直接等于第一张图片的索引号（0),
//让新的imgs[iNow]迅速到右边，也就是left为scrollWidth，
//迅速到右边之后，直接做缓动动画，移动到当前位置。
			else if(this.className == "slider-ctrl-next"){
				//alert("xixi");
				animate(imgs[iNow],{left:-scrollWidth});
				++iNow>imgs.length-1?iNow=0:iNow;
				imgs[iNow].style.left= scrollWidth+"px";
				animate(imgs[iNow],{left:0});
				setSquare();
			}
//中间6个span点击情况，进行进一步细分
			else{
				//alert("piapia");
//获得每个span的innerHTML(1,2,3,4,5,6),在进行减1，这样刚好可以和图片的索引号对应
				var that = this.innerHTML-1;
//利用你要点击的span值，与当前图片的索引值（iNow）比较
//that>inow，这种情况与右箭头span效果相同
				if(that>iNow){
					animate(imgs[iNow],{left:-scrollWidth});
					imgs[that].style.left= scrollWidth+"px";
				}
//that<inow，这种情况与左箭头span效果相同
				if(that<iNow){
					animate(imgs[iNow],{left:scrollWidth});
					imgs[that].style.left= -scrollWidth+"px";
				}
//最后都让iNow等于要点击的span值（即that）,直接执行动画即可
				iNow = that;
				animate(imgs[iNow],{left:0});
				setSquare();
			}
		}
	}
//还需要一个可以控制span变化的函数
	function setSquare(){
		for(var i=1;i<spans.length-1;i++){
			spans[i].className = "slider-ctrl-con";
		}
			spans[iNow+1].className = "slider-ctrl-con current";
	}
//开启定时器，其实就是右箭头span
	var timer=null;
	timer = setInterval(autoplay,2000);
	function autoplay(){
		animate(imgs[iNow],{left:-scrollWidth});
		++iNow>imgs.length-1?iNow=0:iNow;
		imgs[iNow].style.left= scrollWidth+"px";
		animate(imgs[iNow],{left:0});
		setSquare();
	}
//鼠标经过大盒子的时候，清除定时器
	js_slider.onmouseover=function(){
		clearInterval(timer);
	}
//鼠标移出大盒子，开启定时器
	js_slider.onmouseout=function(){
		clearInterval(timer);
		timer=setInterval(autoplay,2000);
	}
}