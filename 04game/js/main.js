//第一步，创建td数组，定义初始状态
var td = new Array(),      //保存每个格子的地鼠
    playing = false,       //游戏是否开始
    score = 0,             //分数
    beat = 0,              //鼠标点击次数
    success = 0,           //命中率
    knock = 0,             //鼠标点中老鼠图片次数
    countDown = 30,        //倒计时
    interId = null,        //指定 setInterval()的变量
    timeId = null;         //指定 setTimeout()的变量

//获取元素函数
function $(id){
    return document.getElementById(id);
}
//第二步，思考，游戏结束时
function GameOver(){
    //游戏结束，清除所有定时器
    timeStop();
    playing = false;
    //清除所有的老鼠图片
    clearMouse();
    //弹出成绩
    alert("游戏结束！\n 你获得的分数为："+score+"\n 命中率为："+success);
    //初始化数据
    success = 0;
    score = 0;
    knock = 0;
    beat = 0;
    countDown = 30;
}


//第三步，实现在游戏过程中，显示当前倒计时所剩时间
function timeShow(){
    $("myremtime").value = countDown;
    if(countDown == 0){
        //时间为0 ，自动结束游戏
        GameOver();
        return;
    }else{
        //每秒钟时间减少1
        countDown = countDown-1;
        timeId = setTimeout("timeShow()",1000);
    }
}

//第四步，清除定时器函数，主动停止所有计时
function timeStop(){
    clearInterval(interId);//clearInterval()方法返回 setInterval()方法的 id
    clearTimeout(timeId);//clearTime()方法返回 setTimeout()的 id
}

//第五步，游戏开始，随机循环显示老鼠图片
function show(){
    if(playing)
    {
        //随机函数
        var current = Math.floor(Math.random()*25);
        //插入老鼠图片
        $("td["+current+"]").innerHTML = '<img src="img/mouse.png">';
        //使用 setTimeout()实现3秒后隐藏老鼠图片
        setTimeout("$('td["+current+"]').innerHTML=''",3000);
    }
}

//第六步，清除所有老鼠图片
function clearMouse(){
    for(var i=0;i<=24;i++)
    {
        $("td["+i+"]").innerHTML="";
    }
}

//第七步，点击事件函数，判断是否点中老鼠
function hit(id){
    //如果没有点击开始的情况下，点击格子，提示
    if(playing==false)
    {
        alert("请点击开始游戏");
        return;
    }
    else
    //游戏开始的情况下，点击盒子
    {   
        //每点击一次，鼠标点击次数增加+1
         beat +=1;
        //判断点击中了老鼠与否？
        if($("td["+id+"]").innerHTML!="")
        {
            //点击中了老鼠，分数+1，点击老鼠的次数+1
            score += 1;
            knock +=1;
            //计算成功率=点击老鼠次数/鼠标点击次数
            success = knock/beat;
            //显示成功率、分数
            $("mysuccess").value = success;
            $("myscore").value = score;
            //老鼠被点击中之后，就不显示
            $("td["+id+"]").innerHTML="";
        }
        else
        {
            //判断当分数为0 的时候，不减，score只计算点中次数
            if(score<=0){
                score = 0
            }
            success = knock/beat;
            $("mysuccess").value = success;
            $("myscore").value = score;
        }
    }
}

//第八步，游戏开始
function GameStart(){
    //判断游戏开始的标准，playing=true
    playing = true;
    //开启定时器，每秒钟执行一次show（）函数，即老鼠随机显示函数
    interId = setInterval("show()",1000);
    //显示分数与成功率
    $("myscore").value = score;
    $("mysuccess").value = success;
    //游戏开始，启动倒计时
    timeShow();
}