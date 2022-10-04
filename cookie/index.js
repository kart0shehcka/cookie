function checkCookies() {
	var cookieDate = localStorage.getItem('cookieDate');
	var cookieNotification = document.querySelector('.cookie__notification');
	var cookieBtn = cookieNotification.querySelector('.cookie__accept');

	// Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
	if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
		cookieNotification.classList.add('show');
	}

	// cookieBtn.addEventListener('click', function () {
	// 	cookieNotification.classList.toggle('show');
	// })

	//Если запись про куки есть, то при нажатии на кнопку ее убираем
	cookieBtn.addEventListener('click', function () {
		localStorage.setItem('cookieDate', Date.now());
		cookieNotification.classList.remove('show');
	});

}
checkCookies();




