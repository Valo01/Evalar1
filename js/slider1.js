const slidernews = document.querySelector('#slider-news');
const sliderItemsnews = Array.from(slidernews.children);
const newsbtnNext = document.querySelector('#newsbtnNext');
const newsbtnPrev= document.querySelector('#newsbtnPrev');

sliderItemsnews.forEach(function (slide, index) {
	console.log(slide);


	if(index!==0){
		slide.classList.add('hidden');
		slide.removeAttribute('data-active');
	}

	slide.dataset.index = index;


	sliderItemsnews[0].setAttribute('data-active', '');



	slide.addEventListener('click', function () {
		console.log('next');
		slide.classList.add('hidden');


		let nextSlideIndex;
		if(index+1===sliderItemsnews.length){
			nextSlideIndex=0;
		}else{
			nextSlideIndex=index+1;
		}

		console.log(nextSlideIndex);

		const nextSlide = slidernews.querySelector(`[data-index="${nextSlideIndex}"]`);
		nextSlide.classList.remove('hidden');
		nextSlide.setAttribute('data-active', '');
	});
});

newsbtnNext.onclick = function () {
	console.log('Next Slide');

	const currentSlide = slidernews.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	let nextSlideIndex;
		if(currentSlideIndex +1===sliderItemsnews.length){
			nextSlideIndex=0;
		}else{
			nextSlideIndex=currentSlideIndex +1;
		}
	const nextSlide = slidernews .querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}

newsbtnPrev.onclick = function () {
	console.log('Prev Slide');

	const currentSlide = slidernews.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	let nextSlideIndex;
		if(currentSlideIndex === 0){
			nextSlideIndex=sliderItemsnews.length-1;
		}else{
			nextSlideIndex=currentSlideIndex - 1;
		}
	const nextSlide = slidernews.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}