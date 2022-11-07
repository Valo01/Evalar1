const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');



sliderItems.forEach(function (slide, index) {
	console.log(slide);


	if(index!==0){
		slide.classList.add('hidden');
		slide.removeAttribute('data-active');
	}

	slide.dataset.index = index;


	sliderItems[0].setAttribute('data-active', '');



	slide.addEventListener('click', function () {
		console.log('next');
		slide.classList.add('hidden');


		let nextSlideIndex;
		if(index+1===sliderItems.length){
			nextSlideIndex=0;
		}else{
			nextSlideIndex=index+1;
		}

		console.log(nextSlideIndex);

		const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
		nextSlide.classList.remove('hidden');
		nextSlide.setAttribute('data-active', '');
	});
});

btnNext.onclick = function () {
	console.log('Next Slide');

	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	let nextSlideIndex;
		if(currentSlideIndex +1===sliderItems.length){
			nextSlideIndex=0;
		}else{
			nextSlideIndex=currentSlideIndex +1;
		}
	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}

btnPrev.onclick = function () {
	console.log('Prev Slide');

	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	let nextSlideIndex;
		if(currentSlideIndex === 0){
			nextSlideIndex=sliderItems.length-1;
		}else{
			nextSlideIndex=currentSlideIndex - 1;
		}
		const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
		nextSlide.classList.remove('hidden');
		nextSlide.setAttribute('data-active', '');
}
