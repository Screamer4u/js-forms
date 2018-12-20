$(document).ready(function() {

	var checkComment = (function(){

		// Переменные формы и ошибки
		var _form = $('.comment-add-block');
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
				textarea = form.find('textarea');

			$.each(textarea, function(index,val) {
				var textarea = $(val),
					value = textarea.val().trim();
				console.log('textarea = ' + textarea);
				console.log('value = ' + value);

				if (value.length === 0){
					_error.fadeIn();
					event.preventDefault();
				} else {
					_error.fadeOut();
					//form.unbind('submit').submit();
				}
			});

			//Что лучше оставить: фокус или keydown?
			//textarea.on('focus', function(){
			//	_error.fadeOut(500);
			//});

			textarea.on('keydown', function(){
				_error.fadeOut(500);
			});
		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	checkComment.init();

});