$(document).ready(function() {

	var checkLogin = (function(){

		//Переменные
		var _email = "mail@mail.com";
		var _password = 123;

		var _loginForm = $('#login-form');
		var _emailInput = $('#email-input');
		var _passwordInput = $('#password-input');

		var _emailErrorBlock = $('#email-error-block');
		var _wrongEmailFormatBlock = $('#wrong-email-format-block');
		var _passwordErrorBlock = $('#password-error-block');
		var _emailPasswordWrongBlock = $('#email-password-wrong-block');

		var init = function(){
			_setUpListeners();
		}

		//Прослушка события по submit
		var _setUpListeners = function(){
			_loginForm.on('submit', function(event){
				_loginValidate(event);
			});
		}

		var _loginValidate = function (event) {
			console.log('private method _loginValidate() is run');

			var form = _loginForm,
				inputs = form.find('input'),
				pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
				emailVal = _emailInput.val().trim(),
				passwordVal = _passwordInput.val().trim();

			$.each(inputs, function(){
				
				if (emailVal.length === 0 || passwordVal.length === 0) {
					if (emailVal.length === 0) {
						event.preventDefault();
						_emailPasswordWrongBlock.fadeOut(0);
						_emailErrorBlock.css('margin-top', '5px').fadeIn(600);
					}

					if (passwordVal.length === 0) {
						event.preventDefault();
						_emailPasswordWrongBlock.fadeOut(0);
						_passwordErrorBlock.css('margin-top', '5px').fadeIn(600);
					}
				} else {

					if (!(pattern.test(emailVal))) {
						event.preventDefault();
						_emailPasswordWrongBlock.fadeOut(0);
						_wrongEmailFormatBlock.css('margin-top', '5px').fadeIn(600);
						console.log('Email is INVALID!');
					} else if (pattern.test(emailVal) && emailVal != _email && passwordVal == _password) {
						event.preventDefault();
						_emailPasswordWrongBlock.fadeIn(600);
						console.log('Email is INVALID!');
					} else if (pattern.test(emailVal) && emailVal == _email && passwordVal != _password) {
						event.preventDefault();
						_emailPasswordWrongBlock.fadeIn(600);
						console.log('Email is INVALID!');
					} else if (pattern.test(emailVal) && emailVal != _email && passwordVal != _password) {
						event.preventDefault();
						_emailPasswordWrongBlock.fadeIn(600);
						console.log('Email is INVALID!');
					} else {
						console.log('Email is VALID!');
					}
				}

				_emailInput.on('focus', function(){
					_emailErrorBlock.fadeOut(600, function(){
						_emailErrorBlock.css('margin-top', '0px');
					});
					_wrongEmailFormatBlock.fadeOut(600, function(){
						_wrongEmailFormatBlock.css('margin-top', '0px');
					});
				});

				_passwordInput.on('focus', function(){
					_passwordErrorBlock.fadeOut(600, function(){
						_passwordErrorBlock.css('margin-top', '0px');
					});
				});


			});
		}

		return {
			init
		}

	}());

	checkLogin.init();
});