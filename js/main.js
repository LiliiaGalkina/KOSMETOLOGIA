'use strict'

let linkText = document.querySelectorAll('#linkText');
let news = document.querySelectorAll('#news')

for(let i = 0; i < linkText.length; i++){
	linkText[i].addEventListener('click', function(){
		for(let i = 0; i < linkText.length; i++){
			linkText[i].classList.remove('link-news__item_active');
		news[i].classList.add('notactive');
	}
		linkText[i].classList.add('link-news__item_active');
		news[i].classList.remove('notactive');
	}
	)	
	}
//---------------------------------------------------------------

let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');


burger.addEventListener('click', func);

function func() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}