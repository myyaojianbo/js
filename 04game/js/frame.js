var $$ = function() {};
$$.prototype = {
	//id
	$id: function(id) {
		return document.getElementById(id);
	},
	//字符串拼接模板
	artTemplate: function(str, data) {
		var render = template.compile(str);
		return render(data);
	},
	//删除左边的空格
	ltrim: function(str) {
		return str.replace(/(^\s*)/g, "");
	},
	//删除右边的空格
	rtrim: function(str) {
		return str.replace(/(\s*$)/g, "");
	},
	//删除两端的空格
	trim: function(str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},
	//拷贝原理创建对象，target目标对象，source原始对象
	extend: function(target, source) {
		for (var i in source) {
			target[i] = source[i];
		}
		return target;
	},
	extendMany: function() {
		var key, i = 0,
			len = arguments.length,
			target = null,
			copy;
		if (len === 0) {
			return;
		} else if (len === 1) {
			target = this;
		} else {
			i++;
			target = arguments[0];
		}
		for (; i < len; i++) {
			for (key in arguments[i]) {
				copy = arguments[i][key];
				target[key] = copy;
			}
		}
		return target;
	},

	//formate函数，用key代替@（）内的值
	// 第一个参数：正则表达式，第二个参数：处理函数：
	// 处理函数的第一个参数：匹配的字符串，第二个参数：括号中的值
	formateString: function(str, data) {
		return str.replace(/@\((\w+)\)/g, function(match, key) {
			return typeof data[key] === "undefined" ? '' : data[key];
		})
	},
	//关键字变色，配合replace使用
	text: function(str) {
		return "<font color='red'>" + str + "</font>";
	}
}

var $$ = new $$();