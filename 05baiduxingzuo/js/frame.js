var $$ = function() {};
$$.prototype= {
	//id
	$id:function(id) {
		return document.getElementById(id);
	},
	//字符串拼接模板
	artTemplate:function(str,data) {
		var render = template.compile(str);
		return render(data);
	},
	//删除左边的空格
	ltrim:function(str) {
		return str.replace(/(^\s*)/g,"");
	},
	//删除右边的空格
	rtrim:function(str) {
		return str.replace(/(\s*$)/g,"");
	},
	//删除两端的空格
	trim:function(str) {
		return str.replace(/(^\s*)|(\s*$)/g,"");
	},
	//拷贝原理创建对象，target目标对象，source原始对象
	extend:function(target,source) {
		for(var i in source){
			target[i]=source[i];
		}
		return target;
	},
	extendMany:function() {
        var key,i = 0,len = arguments.length,target = null,copy;
        if(len === 0){
            return;
        }else if(len === 1){
            target = this;
        }else{
            i++;
            target = arguments[0];
        }
        for(; i < len; i++){
            for(key in arguments[i]){
                copy = arguments[i][key];
                target[key] = copy;
            }
        }
        return target;
    },
	//formate函数，用key代替@（）内的值
	// 第一个参数：正则表达式，第二个参数：处理函数：
	// 处理函数的第一个参数：匹配的字符串，第二个参数：括号中的值
	formateString:function(str,data) {
        return str.replace(/@\((\w+)\)/g,function(match,key){
            return typeof data[key] === "undefined" ? '' : data[key];
        })
    },
    //关键字变色，配合replace使用
    text:function(str) {
		return "<font color='red'>"+str+"</font>";
	},
	//location.search传递参数
	simpleQuery:function() {
		var params = window.location.search;//params:?id,date
		var arr = params.substring(1).split(",");
		return arr;
	},
	querystring:function() {
		var str = window.location.search.substring(1);//获取URL查询字符串参数值的通用函数
		var arr = str.split("&");//以&符号为分界线把查询字符串分割成数组
		var json = {};//定义一个临时对象
		for(var i=0;i<arr.length;i++) {//遍历数组
			var c = arr[i].indexOf("=");//获取每个参数中的等号小标的位置
			if(c == -1) continue;//如果没有发现，则跳到下一次循环继续操作
			var d = arr[i].substring(0,c);//截取等号前的参数名称，这里分别是id和name
			var e = arr[i].substring(c+1);//截取等号后的参数值
			json[d] = e;//以 名/值 对的形式保存到对象中
		} 
		return json;//返回对象
	}
}

var $$ =new $$();