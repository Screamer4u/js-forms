$(document).ready(function() {

	var checkComment = (function(){

		// Переменные модуля
		var _form = $('.comment-add-block');
		var _error = $('.notify-hide');

		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_formValidate(event);
			});
		}

		// Приватные методы
		var _formValidate = function (event) {
    		event.preventDefault();
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
				} else {
					_error.fadeOut();
					form.unbind('submit').submit();
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