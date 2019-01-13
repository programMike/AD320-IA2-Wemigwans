function validateForm() {
	var inputName = document.getElementById('name').value;
	var labelRequireName = document.getElementById('requireName');
	var inputEmail = document.getElementById('email').value;
	var labelRequireEmail = document.getElementById('requireEmail');

  	if (inputName.length == 0){
 		labelRequireName.innerHTML = "* Required; Name Entry";
 	} else {
 		labelRequireName.innerHTML = "";
 	}

 	if (inputEmail.length == 0){
 		labelRequireEmail.innerHTML = "* Required; Email Entry";
 	} else {
 		labelRequireEmail.innerHTML = "";
 	}

 	if (inputName.length == 0 || inputEmail.length == 0){
 		return false;
 	} else {
 		return true;
 	}

}