userAge.onblur = function() {
	if ((isNaN(this.value)) || (this.value > 100) || (this.value < 1)) {
		this.classList.add('error');
		this.value = 'error';
		userAge.focus();
	} else {
		this.classList.remove('error');
	}
}

function sendDataByGetMethod(){
	var userData = {
		userSurname:document.getElementById('userSurname').value,
		userName:document.getElementById('userName').value,
		userAge:document.getElementById('userAge').value,
		userAddress:document.getElementById('userAddress').value
	};
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/userGet?userSurname="+userData.userSurname+"&userName="+userData.userName+"&userAge="+userData.userAge+"&userAddress="+userData.userAddress);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send();
}

function sendDataByPostMethod(){
	var userData = {
		userSurname:document.getElementById('userSurname').value,
		userName:document.getElementById('userName').value,
		userAge:document.getElementById('userAge').value,
		userAddress:document.getElementById('userAddress').value
	};
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/userPost"); 
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(userData));
}