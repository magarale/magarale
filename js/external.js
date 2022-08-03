 			 	
 			 // const ram = {
 			 // 	name: "Sanjeev",
 			 // 	age: 21,
 			 // 	gender: "YourGender",
 			 // 	weigth: 58
 			 // };
 			

 			 var a=1;
			 var b=2;
			 var c=a+b;

		//js for div class="javascript"
		function displayMessage(){
			var age = document.getElementById("age").value;
			if (age>18) {
				var message="eligible for voter";
			} else {
				var	message="Not eligible for voter";
			}
			alert(message)
			document.getElementById("message").innerHTML = message;
		}
		//using switch statemnet
		let day;
		console.log(new Date().getDay())
			switch(new Date().getDay()){
 			case 0:
 			day ="sunday";
 			break;
 			case 1:
 			day ="monday";
 			break;
 			case 2:
 			day ="tuesday";
 			break;
 			case 3:
 			day ="wedenesday";
 			break;
 			case 4:
 			day ="thrusday";
 			break;
 			case 5:
 			day ="Friday";
 			break;
 			case 6:
 			day ="saturday";
 		}
 			alert("today is :" + day)
 			document.getElementById("day").innerHTML = +day;

// using for loop
 	function displayName5times(){
 		for (var i=1;i<=5;i++){
 			alert("loop"+ i);
 		}
 	}
 			
//objects
function displaydata() {
			 const ram = {
 			 	name: "Your name",
 			 	age: 21,
 			 	gender: "MAle",
 			 	weigth: 58
 			 };

 			console.log(ram.name)

		 document.getElementById("getdata").innerHTML =
		  "Your name is:<b>" +ram.name+
		 " <br>and age is<b></b>" +ram.age+
		  "</b><br>gender:<b>" +ram.gender;
		   "</b>Your name is:" +ram.weight;

		 }		 
//array
	let car = ["Toyota","Mercides","bmw"];
	console.log(car)
	console.log(car.length)
	console.log(car.includes("BMW"))


//last of form
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