$(document).ready(function() {

	var checkLogin = (function(){

		var _email = "mail@mail.com";
		var _password = 123;

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
			console.log('private method _loginValidate() is run');

			var form = _loginForm,
				inputs = form.find('input'),
				emailVal = _emailInput.val().trim(),
				passwordVal = _passwordInput.val().trim(),
				fadeInEmail, fadeInPas, fadeInEmailPasswordBlock,
				isWrongEmailFormatBlock = false;

			$.each(inputs, function(){

				var DRY = function(prevDef, fadeInFor, blockName, blockNameAfter, remClass){
					preventDef = prevDef ? event.preventDefault() : false;
					fadeInFor = blockName.insertAfter(blockNameAfter);
					blockNameAfter.css({'margin-bottom':'15px'});
					fadeInFor.fadeIn(600);
					blockName.removeClass(_emptyEmail);
				}

				if (emailVal.length === 0 || passwordVal.length === 0) {
					if (emailVal.length === 0) {
						event.preventDefault();
						fadeInEmail = _emailErrorBlock.insertAfter(_emailInput);
						_emailInput.css({'margin-bottom':'15px'});
						fadeInEmail.fadeIn(600);
						_emailErrorBlock.removeClass(_emptyEmail);
					} else {
						var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
						if (pattern.test(emailVal)){
							console.log('Email is VALID!');
						} else {
							event.preventDefault();
							fadeInEmail = _wrongEmailFormatBlock.insertAfter(_emailInput);
							_emailInput.css({'margin-bottom':'15px'});
							fadeInEmail.fadeIn(600);
							_wrongEmailFormatBlock.removeClass(_wrongEmail);
							isWrongEmailFormatBlock = true;
							console.log('Email is INVALID!');
						}
					}

					if (passwordVal.length === 0) {
						event.preventDefault();
						fadeInPas = _passwordErrorBlock.insertAfter(_passwordInput);
						_passwordInput.css({'margin-bottom':'15px'});
						fadeInPas.fadeIn(600);
						_passwordErrorBlock.removeClass(_emptyPassword);
					}
				} else {
					if (passwordVal != _password || emailVal != _email) {
						event.preventDefault();
						fadeInEmailPasswordBlock = _emailPasswordWrongBlock.insertBefore(_emailInput);
						fadeInEmailPasswordBlock.fadeIn(600);
						_emailPasswordWrongBlock.removeClass(_wrongEmailOrPassword);
					}
				}

				_emailInput.on('focus', function(){
					if(isWrongEmailFormatBlock === true)
					{
						fadeInEmail.fadeOut(600);
						_wrongEmailFormatBlock.addClass(_wrongEmail);
					} else {
						fadeInEmail.fadeOut(600, function(){
							_emailInput.css({'margin-bottom':'0px'});
						});
						_emailErrorBlock.addClass(_emptyEmail);
					}
				});

				_passwordInput.on('focus', function(){
					fadeInPas.fadeOut(600, function(){
						_passwordInput.css({'margin-bottom':'0px'});
					});
					_passwordErrorBlock.addClass(_emptyPassword);
				});

			});
		}

		return {
			init
		}
	
	}());
  
	checkLogin.init();

});