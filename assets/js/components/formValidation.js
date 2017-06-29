'use strict';
const regexMail = /^[a-zA-Z0-9_\-\.~]{2,}@[a-z_\-\.~]{2,}\.[a-z]{2,4}$/;
const name = $('#name');
const email = $('#email');
const message = $('#message');
const btnSend = $('#btn-send');

const validateForm = (e) => {
	e.preventDefault();
	console.log('click');
	if(name.val().length >= 3 && regexMail.test(email.val())){
		console.log('si');
		$.post('user.JSON', {
			name: name.val()
		}, (data)=>{
			console.log(data);
		});
	}
};

const confirm = (e) =>{
	// e.preventDefault();
	console.log('submit');
	alert('tus datos fueron enviados');
}
btnSend.on({
	click: validateForm,
	submit: confirm
})
