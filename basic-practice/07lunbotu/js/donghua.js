function animate(obj,json,fn){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var flag =true;        //用来判断是否停止计时器，一定要写在遍历外面
			for(var attr in json){   //json 遍历	
//1.判断是否有opacity,计算当前值current
				var current = 0;
				if(attr =="opacity"){
					current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;//  IE6、7、8支持透明度写法（没有小数，只要整数，所以乘以100）
                    console.log(current);
				}else{
				    current = parseInt(getStyle(obj,attr));//    attr是属性，获取元素属性值（带px），并转换成数值取整
				}
//2.计算步长，判断步长加减
				var step = (json[attr]-current)/10;        //    计算步长，json[attr]是属性的值
				step = step>0?Math.ceil(step):Math.floor(step);//    判断步长正负
//3.判断是否有opacity，计算公式
				if(attr == "opacity"){       //判断是否有opacity属性
//4.如果有opacity，解决IE兼容性
					if("opacity" in obj.style){     //判断浏览器是否支持opacity
						obj.style.opacity = (current+step)/100;
					}else{
						obj.style.filter = "alpha(opacity="+(current+step)*10+")"; //为什么*10？
					}
				} 
//5.判断是否有zIndex
				else if(attr == "zIndex"){
                    obj.style.zIndex = json[attr];
                }
				else{
					obj.style[attr] =current+step+"px";        //     运动公式，obj.style[attr]代替之前学的obj.style.left
				}
//6.停止计时器条件
				if(current!=json[attr]){           //只要有一个没有满足条件，也就是没有到达目标，就不应该停止计算器，这句话一定要写在计时器里面
					flag =false;
				}
			}
			if(flag){     //如果全都满足条件，停止计算器，这句话一定要写在遍历外面
				clearInterval(obj.timer);
//7.回调函数
				if(fn){
					fn();
				}
			}
		},20)
	}

	function getStyle(obj,attr){//    获取属性函数封装
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return window.getComputedStyle(obj,null)[attr];
		}
	}