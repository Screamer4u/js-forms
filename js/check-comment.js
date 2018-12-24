$(document).ready(function() {

	var checkComment = (function(){

		// Переменные формы и ошибки
		var _form = $('#comment-form');
		var _errorBlock =$('#error-block');
		var _error = $('.notify-hide');

		var init = function(){
			_setUpListeners();
		}

		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_textareaValidate(event);
			});
		}

		var _textareaValidate = function (event) {
			console.log('private method _formValidate() is run');

			var form = _form,
				textarea = form.find('textarea'),
				fadeInError;

			$.each(textarea, function(index,val) {
				var textarea = $(val),
					value = textarea.val().trim();
				console.log('textarea = ' + textarea);
				console.log('value = ' + value);

				if (value.length === 0){
					fadeInError = _error.removeClass(_error).fadeIn();;
					event.preventDefault();
				}
			});

			textarea.on('keydown', function(){
				fadeInError = _error.addClass(_error).fadeOut();
			});
		}

		return {
			init
		}
	
	}());
  
	checkComment.init();

});