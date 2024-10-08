function validation(){
	 var fullname=document.getElementById("name").value;
	 var email=document.getElementById("email").value;
	 var gender1=document.getElementById("male").checked;
	 var gender2=document.getElementById("female").checked;
	 var phonenumber=document.getElementById("phone").value;
	 var age=document.getElementById("age").value;
	 var password1=document.getElementById("password1").value;
	 var password2=document.getElementById("password2").value;

	if(fullname==""){
		document.getElementById("namewarning").innerHTML ="Should enter name"
	}
       for(i=0;i<fullname.length;i++){
		var type=fullname.charAt(i);
		if((/[0-9]/).test(type)==true){
			document.getElementById("namewarning").innerHTML ="Should only contain characters"
		}
	}
       

		
	
	var phonestring = phonenumber.toString();
	if(phonestring==""){
		document.getElementById("phonewarning").innerHTML ="Should enter Phone Number"
	}
	else{
		if(isNaN(phonenumber)==true){
			document.getElementById("phonewarning").innerHTML ="Should only contain digits"
		}
		else if(phonestring.length!=10){
			document.getElementById("phonewarning").innerHTML ="Should have 10 digits"
		}  
	}


	if(email==""){
		document.getElementById("emailwarning").innerHTML ="Should enter Email-id"
	}
	else{
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const isValid = emailPattern.test(email);
		if(isValid == false){
			document.getElementById("emailwarning").innerHTML ="Should follow email pattern"		
		}
	}



	if(gender1==""||gender2==""){
		document.getElementById("genderwarning").innerHTML ="Should Select Gender"
	}


	var agestring = age.toString();
	if(agestring==""){
		document.getElementById("agewarning").innerHTML ="Should enter Age"
	}
	else{
		if(isNaN(age)==true){
			document.getElementById("ageewarning").innerHTML ="Should only contain digits"
		}
		else if(age<=0){
			document.getElementById("agewarning").innerHTML ="Should be greater than 0"
		}
	}




	if(password1==""){
		document.getElementById("pass1warning").innerHTML ="Should enter password"
	}


	if(password2==""){
		document.getElementById("pass2warning").innerHTML ="Should Re-enter password"
	}

	if(password1 != password2){
		document.getElementById("pass2warning").innerHTML ="Password Miss Match"
	}

}