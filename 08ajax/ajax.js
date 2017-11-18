function ajax(data){
		/*data={data:"",
	 		dataType:"xml/json",
			type:"get/post",
			url:"",
			asyn:"true/false",
			success:function(){},
			failure:function(){}}*/

	//data:{username:123,password:456}
	//data = 'username=123&password=456';
	//第一步：创建xhr对象
	var xhr = null;
	if(window.XMLHttpRequest){//标准的浏览器
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHTTP');//早期IE浏览器
	}
	//第二步：准备发送前的一些配置参数
	var type = data.type == 'get'?'get':'post';
	var url = '';
	if(data.url){
		url = data.url;
		if(type == 'get'){
			url += "?" + data.data + "&_t="+new Date().getTime();
			//处理get方式的缓存问题
		}
	}
	var flag = data.asyn == 'true'?'true':'false';
	xhr.open(type,url,flag);

	//第三步：执行发送的动作
	if(type == 'get'){
	   xhr.send(null);
	}else if(type == 'post'){
		//post方式下需要写明请求头，指明content-type
	   xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	   xhr.send(data.data);
	}

	//第四步：指定回调函数
	xhr.onreadystatechange = function(){
		if(this.readyState == 4){
			if(this.status == 200){
				if(typeof data.success == 'function'){
					var d = data.dataType == 'xml'?xhr.responseXML:xhr.responseText;
					data.success(d);
				}
			}else{
				if(typeof data.failure == 'function'){
					data.failure();
				}
			}
		}
	}

}
