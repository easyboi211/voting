
let login = document.getElementById('login');
let signup = document.getElementById('signup');
let errorMsg = document.querySelector('.error-msg');
let formInput = document.querySelectorAll('.form-input');
let signupBtn = document.querySelector('.signup-btn');
let loginInput = document.querySelectorAll('.login-input');
let loginBtn = document.querySelector('.submit-btn');
let errorMsg2 = document.querySelector('.error-msg-2');


login.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element == "slide-up") {
			signup.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}else{
			
		}
	});
});

signup.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			login.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')

		}else{
			
		}
	});
});

signupBtn.addEventListener('click', function(){
	if (formInput[0].value === '') {
		errorMsg.textContent = 'Please enter your First name'
	}
	else if(formInput[1].value === '') {
		errorMsg.textContent = 'Please enter your Last Name'
	}
	else if (formInput[2].value === '') {
		errorMsg.textContent = 'Please enter a valid email'
	}
	else if(formInput[3].value === '') {
		errorMsg.textContent = 'Please enter your password'
	}
	else if(formInput[4].value !== formInput[3].value) {
		errorMsg.textContent = 'Passwords do not match'
	}
	else{
		let link = 'index.html?name=';
		let name = formInput[0].value;
		window.open(link + encodeURIComponent(name))
		window.close();
	}
})

loginBtn.addEventListener('click', function(){
	if (loginInput[0].value === '') {
		errorMsg2.textContent = 'Please enter your Fullname'		
	}
	else if (loginInput[1].value === '') {
		errorMsg2.textContent = 'Please enter your password'
	}
	else{
		let link = 'index.html?name=';
		let name = loginInput[0].value;
		window.open(link + encodeURIComponent(name))
		window.close();
	}
})