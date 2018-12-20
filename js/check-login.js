$(document).ready(function() {

	var checkLogin = (function(){

		var _loginForm = $('#login-form');
		var _emailInput = $('#email-input');
		var _passwordInput = $('#password-input');

		var _emailErrorBlock = $('#email-error-block');
		var _wrongEmailFormatBlock = $('#wrong-email-format-block');
		var _passwordErrorBlock = $('#password-error-block');
		var _emailPasswordWrongBlock = $('#email-password-wrong-block');

		var _emptyEmail = 'empty-email';
		var _wrongEmail = 'wrong-email';
		var _emptyPassword = 'empty-password';
		var _wrongEmailOrPassword = 'wrong-email-or-password';

		var init = function(){
			_setUpListeners();
		}

		var _setUpListeners = function(){
			_loginForm.on('submit', function(event){
				_loginValidate(event);
			});
		}

		var _loginValidate = function (event) {
    		event.preventDefault();
			console.log('private method _loginValidate() is run');

			var form = _loginForm,
				inputs = form.find('input'),
				emailVal = _emailInput.val().trim(),
				passwordVal = _passwordInput.val().trim(),
				fadeInEmail, fadeInPas;

			$.each(inputs, function(){

				if (emailVal.length === 0) {
					fadeInEmail = _emailErrorBlock.insertAfter(_emailInput);
					_emailInput.css({'margin-bottom':'15px'});
					fadeInEmail.fadeIn(1000);
					_emailErrorBlock.removeClass(_emptyEmail);
				} 
				if (passwordVal.length === 0) {
					fadeInPas = _passwordErrorBlock.insertAfter(_passwordInput);
					_passwordInput.css({'margin-bottom':'15px'});
					fadeInPas.fadeIn(1000);
					_passwordErrorBlock.removeClass(_emptyPassword);
				}
			});
		}

		return {
			init
		}
	
	}());
  
	checkLogin.init();

});