$(document).ready(function() {

	var checkRegistration = (function(){

		//Переменные
		var _email = "mail@mail.com";

		var _registrationForm = $('#registration-form');
		var _emailInput = $('#email-input');
		var _passwordInput = $('#password-input');

		var _emailErrorBlock = $('#email-error-block');
		var _wrongEmailFormatBlock = $('#wrong-email-format-block');
		var _passwordErrorBlock = $('#password-error-block');
		var _emailBusy = $('#email-busy');

		var init = function(){
			_setUpListeners();
		}

		//Прослушка события по submit
		var _setUpListeners = function(){
			_registrationForm.on('submit', function(event){
				_registrationValidate(event);
			});
		}

		var _registrationValidate = function (event) {
			console.log('private method _loginValidate() is run');

			var form = _registrationForm,
				inputs = form.find('input'),
				pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
				emailVal = _emailInput.val().trim(),
				passwordVal = _passwordInput.val().trim();

			$.each(inputs, function(){
				
				if (emailVal.length === 0) {
					event.preventDefault();
					_emailErrorBlock.fadeIn(600);
				} else {
					if (emailVal == _email) {
						event.preventDefault();
						_emailBusy.fadeIn(600);
					}
					if (pattern.test(emailVal)){
						console.log('Email is VALID!');
					} else {
						event.preventDefault();
						_emailBusy.fadeOut(0);
						_wrongEmailFormatBlock.fadeIn(600);
						console.log('Email is INVALID!');
					}
				}

				if (passwordVal.length === 0) {
					event.preventDefault();
					_passwordErrorBlock.fadeIn(600);
				}

				_emailInput.on('focus', function(){
					_emailErrorBlock.fadeOut(600);
					_wrongEmailFormatBlock.fadeOut(600);
				});

				_passwordInput.on('focus', function(){
					_passwordErrorBlock.fadeOut(600);
				});


			});
		}

		return {
			init
		}

	}());

	checkRegistration.init();

});