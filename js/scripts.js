let menuBtn = document.querySelector('.header__ham');
let menu = document.querySelector('.navbar__links');
let stop_scroll = document.querySelector('body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('activate');
	menu.classList.toggle('activate');
	stop_scroll.classList.toggle('activate')
})