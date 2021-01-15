console.log("asdasd");
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();
let mask = document.querySelector('.mask');

window.addEventListener('load', function () {
	mask.classList.add('hide');
	setTimeout(() => {
		mask.remove();
	}, 1200)
});


$(".icon__menu").click(function () {
	// $(this).toggleClass("active");
	$(this).toggleClass("rotate");
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
})
$('.menu__link').click(function () {
	$('.menu__body').removeClass('active');
	$('.icon__menu').removeClass('rotate');
})

$('.input>input').focus(function () {
	let inp = $(this).parent().children("label");
	inp.addClass("clicked");
	// $('.input>input').focusout(function () {
	// 	$(this).parent().children("label").removeClass("clicked");
	// })



})
if ($('.input>input').val() == "") {
	// this.removeClass("clicked");
	$('.input>input').removeClass("clicked");

}
if (!$('.input>input').val() == "") {
	$('.input>input').addClass("clicked");
	alert("fff");
}


;

$(document).ready(function () {
	$('.slider').slick({
		arrows: false,

	});
});
// $(document).ready(function () {
// 	$('.cooperate__body').slick({
// 		arrows: true,
// 		dots: false,
// 		slidesToShow: 4,
// 		// slidesToScroll: 2,
// 		infinite: true

// 	});
// });;
const animItems = document.querySelectorAll(".anim-items");
const animItems_two = document.querySelectorAll(".anim-side");

if (animItems.length > 0) {
	document.querySelector("body").addEventListener('scroll', animOnSCroll);

	function animOnSCroll() {

		for (let index = 0; index < animItems.length; index++) {

			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;


			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);


			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add("active");

			}
			else {
				animItem.classList.remove("active");


			}

		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop, left: rect.left + scrollLeft
		}
	}
	animOnSCroll();
}

// if (animItems_two.length > 0) {
// 	document.querySelector("body").addEventListener('scroll', animOnSCroll__two);

// 	function animOnSCroll__two() {

// 		for (let index = 0; index < animItems_two.length; index++) {
// 			const animItemTwo = animItems_two[index];
// 			const animItemHeightTwo = animItemTwo.offsetHeight;
// 			const animItemOffsetTwo = offset(animItemTwo).top;
// 			const animStartTwo = 4;


// 			let animItemPointTwo = window.innerHeight - animItemHeightTwo / animStartTwo;

// 			if (animItemHeightTwo > window.innerHeight) {
// 				animItemPointTwo = window.innerHeight - (window.innerHeight / animStartTwo);


// 			}

// 			if ((pageYOffset > animItemOffsetTwo - animItemPointTwo) && pageYOffset < (animItemOffsetTwo + animItemHeightTwo)) {
// 				animItemTwo.classList.add("active");

// 			}
// 			else {
// 				animItemTwo.classList.remove("active");


// 			}

// 		}
// 	}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// 		// const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return {
// 			top: rect.top + scrollTop, left: rect.left + scrollLeft
// 		}
// 	}
// 	animOnSCroll__two();
// }


const anchors = document.querySelectorAll('.menu__link[href*="#"]');



for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	});
}
const hire = document.querySelector('.hire');
const hire2 = document.querySelector('.hire2');
const portfolio = document.querySelector('.portf');


hire.addEventListener('click', function (e) {
	console.log("clock");
	e.preventDefault()
	// const hireBlock = document.querySelector('#contacts');
	document.getElementById('contacts').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})

});
hire2.addEventListener('click', function (e) {
	console.log("clock");
	e.preventDefault()
	// const hireBlock = document.querySelector('#contacts');
	document.getElementById('contacts').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})

});
portfolio.addEventListener('click', function (e) {
	console.log("clock");
	e.preventDefault()
	// const hireBlock = document.querySelector('#contacts');
	document.getElementById('portfolio').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})

});

AOS.init();
AOS.refresh();;
let acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("rotate");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
};
let prog = document.querySelector(".progress-bar");

window.addEventListener("scroll", myFunction);

function myFunction() {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (winScroll / height) * 100;
	console.log(scrolled);
	prog.style.width = scrolled + "%";

};
$(document).ready(function () {




	$('.theme__switcher').click(function () {
		let new_theme = $('.theme__switcher, .section__title,.icon__menu, .portfolio__body, .accordion, .container__main, h1, span, .switcher, body, .section,p, header, .menu__link, h2, .menu__list>li, .item__footer, .section__faq')

		new_theme.toggleClass('active');
		let _theme = new_theme.hasClass('active');




	})

})

document.querySelector('.theme__switcher').addEventListener('click', function (e) {
	e.preventDefault();
	// 
	// alert(document.cookie);


})
	// Пример использования:
	;
const cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
	const card = cards[i];
	card.addEventListener('mousemove', rotate);
	card.addEventListener('mouseout', stopRotate)
}

function rotate(e) {
	const cardItem = this.querySelector('.card-item');
	const halfHeight = cardItem.offsetHeight / 2;

	cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 7 + 'deg) rotateY(' + (e.offsetX - halfHeight) / 7 + 'deg)';
}
function stopRotate() {
	const cardItem = this.querySelector('.card-item');
	cardItem.style.transform = 'rotate(0)';
}
console.log(card);;


function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

