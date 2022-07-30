 			 var a=1;
			 var b=2;
			 var c=a+b;

			 

function getDate() {
	var date = new Date();
	
	var par = document.getElementById("current_date");
	console.log(par)
	par.innerHTML = date;
	par.style.color ="red";

			 	
}

function getEmail() {
	var name = document.getElementById("name").value;
	document.getElementById("getname").innerHTML ="Your name is:" +name;

	var email = document.getElementById("email").value;
	document.getElementById("getmail").innerHTML="Your email is:" +email;

	var password = document.getElementById("password").value;
	document.getElementById("getpassword").innerHTML ="Your password is:"+ password;

	var mobile = document.getElementById("mobile").value;
	document.getElementById("getmobile").innerHTML ="Your mobile is:"+ mobile;

	var gender = document.getElementById("gender").value;
	document.getElementById("getgender").innerHTML ="Your gender is:"+ gender;

	var remarks = document.getElementById("remarks").value;

	 document.getElementById("getremarks").innerHTML ="Your remarks is:"+ remarks;
}