var upseed = 12;//上升高度
var t2;//上升时间句柄
var seed = 1;//下降速度
var t;//下降时间句柄
var tflag = true;
var t_back;
function rise(){
	if(tflag == true){
		t_back = setInterval(Marquee,speed);
		tflag = false;
	}
	stopDown();//停止下降
	stopUp();//停止之前的升高
	t2 = setInterval("goUP()",20);//正常升高
}

function stopUp(){
	upseed = 12;
	clearInterval(t2);
}

function goUP(){
	$("#bird").css("background", 'url(./pic/birdup.png)');
	var topPx = $(".bird").offset().top;
	var h = upseed;
	upseed--;
	if((topPx-h) < 30){
		$(".bird").offset({top:30});
		stopUp();
		down();//升高结束后下降
	}
	$(".bird").offset({top:topPx-h});
	if(upseed <= 0){
		stopUp();
		down();//升高结束后下降
	}
}

function down(){
	t = setInterval("goDown()",15);
}

function stopDown(){
	seed=0;
	clearInterval(t);	
}

function goDown(){
	$("#bird").css("background", 'url(./pic/birddown.png)');
	var topPx = $(".bird").offset().top;
	if(topPx > 520){
		gameOver();
		stopDown();
		return;
	}
	seed+=0.02;
	var h = 0.5*9.8*seed*seed*7;
	$(".bird").offset({top:topPx+h});
}
var Score = 0;
function createPipe(){
	var kong = 200;
	var Height = 550;
	var topHeight = 50+Math.random()*250;
	var bottomHeight = Height-topHeight-kong;
	var html ='<div id="toppipe" style="background:url(./pic/pipe_body.png) repeat-y; position:absolute; top:0px; right:20px; width:50px; height:'+topHeight+'px;"></div>';
		html+='<div id="bottompipe" style="background:url(./pic/pipe_body.png) repeat-y; position:absolute; bottom:52px; right:20px; width:50px; height:'+bottomHeight+'px;"></div>';
	$("#back").html(html);
}
