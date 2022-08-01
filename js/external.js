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

// <!- form javascript code-!>
function getJs() {
	var name = document.getElementById("name").value;
	 document.getElementById("getName").innerHTML = "Your name is:" +name;

	
	var password = document.getElementById("password").value;
	 document.getElementById("getPassword").innerHTML = "Your password is:" +password;

	var mobile = document.getElementById("mobile").value;
	 document.getElementById("getMobile").innerHTML = "Your mobile is:" +mobile;


	var remarks = document.getElementById("remarks").value;
	 document.getElementById("getRemarks").innerHTML = "Your remarks is:" +remarks;
}

 function getEmail() {
 	var email = document.getElementById("email").value;
	 document.getElementById("getEmail").innerHTML = "Your email is:" +email;

 }