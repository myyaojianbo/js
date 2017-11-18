//12个星座，动态生成，先放置一个数组里
var data = [
	{name:"白羊座",time:"3.21-4.19"},
	{name:"金牛座",time:"4.20-5.20"},
	{name:"双子座",time:"5.21-6.21"},
	{name:"巨蟹座",time:"6.22-7.22"},
	{name:"狮子座",time:"7.23-8.22"},
	{name:"处女座",time:"8.23-9.22"},
	{name:"天枰座",time:"9.23-10.23"},
	{name:"天蝎座",time:"10.24-11.22"},
	{name:"射手座",time:"11.23-12.21"},
	{name:"摩羯座",time:"12.22-1.19"},
	{name:"水瓶座",time:"1.20-2.18"},
	{name:"双鱼座",time:"2.19-3.20"}
];

//先设计单个星座，再利用遍历，生成12个
//构造函数对象
	function xingZuo(data,num){
		this.data=data;
		//生成放置一个星座的盒子
		this.index = num;
		this.dom = $('<div></div>').addClass('item num-'+num);
		//保存临时变量，放置所有星座的大盒子
		this.config={jqueryContainer:$('.xingzuo')};
		this.init();
	}

//原型对象
	xingZuo.prototype={
		//用户只需要调用init这一个函数即可
		init:function(){
			this.bindDOM();
			this.bindEvent();
		},
		bindDOM:function(){
			//拼接formateString方法，动态生成一个星座
			var str='';
				str+='<div class="image"></div>';
				str+='<div class="description">';
					str+='<p class="name">@(name)</p>';
					str+='<p class="time">@(time)</p>';
					str+='<div class="mark"></div>';
				str+='</div>';
			this.dom.html($$.formateString(str,this.data)).appendTo(this.config.jqueryContainer);
		},
		//事件绑定
		bindEvent:function(){
			//一定要注意这里的this与that
			var that = this
			this.dom.mouseenter(function(){
				that.dom.addClass('is-hover');
			}).on('mouseleave',function(){
				that.dom.removeClass('is-hover');
			}).on('click',function(){
				//that.dom.toggleClass('selected');
				//传递字符串num，数据data的索引值
				window.location = 'detail.html?num='+that.index;
			})
		}
	}



//实例化创建12个星座对象

	for(var i=0;i<data.length;i++){
			new xingZuo(data[i],i);
	}



		