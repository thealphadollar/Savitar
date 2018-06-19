$("#roll").blur(function(){
	var roll = $("#roll").val();
	if(roll=="" || roll==null)
	{
		alert("Insert the roll no.");
		return;
	}
	$("#overlay").show();
	var que1="";
	var que2="";
	var que3="";
	var i=0;
	while(que1 =="" || que2=="" || que3=="")
	{
			if(i==10)
				break;
			var request = $.ajax({
		    url: "https://erp.iitkgp.ac.in/SSOAdministration/getSecurityQues.htm",
		    type: "POST",
		    cache: false,
		    data: "user_id=" + roll,
		    dataType: "text"
		  });
		  request.done(function(response) {
		    if(que1=="")
		    {
		    	que1=response;
		    }
		    else if(que2=="" && response!=que1)
		    {
		    	que2=response;
		    }
		    else if(response!=que1 && response!=que2)
		    {
		    	que3=response;
		    	$("#ques1").val(que1);
				$("#ques2").val(que2);
				$("#ques3").val(que3);
		    }
		  });
		  i++;
	}
	
	$("#overlay").hide();

	

});
function save_options(){
			var roll = document.getElementById("roll").value;
			var pwd  = document.getElementById("pwd").value;
			var que1 = document.getElementById("ques1").value;
			var que2 = document.getElementById("ques2").value;
			var que3 = document.getElementById("ques3").value;
			var ans1 = document.getElementById("ans1").value;
			var ans2 = document.getElementById("ans2").value;
			var ans3 = document.getElementById("ans3").value;
			chrome.storage.local.set({
				'username': roll,
				'password': pwd,
				'ques1': que1,
				'ques2': que2,
				'ques3': que3,
				'ans1': ans1,
				'ans2': ans2,
				'ans3': ans3
			}, function(){
				var status = document.getElementById("status");
				status.textContent = "Options Saved!!";
				setTimeout(function(){
					status.textContent='';
				}, 2000);
			});
		}
		document.getElementById("save").addEventListener('click', save_options);