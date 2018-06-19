
var ques1 = "";
var username = "";
var password = "";
var ques2 = "";
var ques3 = "";
var ans1 = "";
var ans2 = "";
var ans3 = "";
chrome.storage.local.get(null, function(result){
	username = result.username;
	password = result.password;
	ques1    = result.ques1;
	ques2    = result.ques2;
	ques3    = result.ques3;
	ans1     = result.ans1;
	ans2     = result.ans2;
	ans3     = result.ans3;
	$("#user_id").focus();
	$("#user_id").val(username);
	$("#password").val(password);
	$("#password").focus();
	var myVar = setInterval(function(){
		var ques = $("#question").html();
		if(ques==ques1)
		{
			$("#answer").val(ans1);
			$(".btn:first").click();
			clearInterval(myVar);
		}
		else if(ques==ques2)
		{
			$("#answer").val(ans2);
			$(".btn:first").click();
			clearInterval(myVar);
		}
		else if(ques==ques3)
		{
			$("#answer").val(ans3);
			$(".btn:first").click();
			clearInterval(myVar);
		}

	}, 500);
	console.log(username);
});





// $("#user_id").focus();
// $("#user_id").val(username);
// $("#password").val(password);
// $("#password").focus();
// var myVar = setInterval(function(){
// 	var ques = $("#question").html();
// 	if(ques==ques1)
// 	{
// 		$("#answer").val(ans1);
// 		$(".btn:first").click();
// 		clearInterval(myVar);
// 	}
// 	else if(ques==ques2)
// 	{
// 		$("#answer").val(ans2);
// 		$(".btn:first").click();
// 		clearInterval(myVar);
// 	}
// 	else if(ques==ques3)
// 	{
// 		$("#answer").val(ans3);
// 		$(".btn:first").click();
// 		clearInterval(myVar);
// 	}

// }, 500);

	