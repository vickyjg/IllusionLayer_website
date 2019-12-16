/* Carousel slide based on Kevin Powell's tutorial: https://www.youtube.com/watch?v=VYsVOamdB0g */

const track = document.querySelector('.carousel_track');

const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel_button-right');

const previousButton = document.querySelector('.carousel_button-left');

const nav = document.querySelector('.carousel_nav');

const dots = Array.from(nav.children);

const slideSize = slides[0].getBoundingClientRect();

const slideWidth = slideSize.width;

console.log(slideWidth);

// arrange slides next to each other
const setSlidePosition = (slide, index) => {
     slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);
    
 
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
};

// left click
previousButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
     
    const previousSlide = currentSlide.previousElementSibling;
    
    moveToSlide(track, currentSlide, previousSlide);
    
 
});


// right click
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
     
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
    
 
});



// indicator click

nav.addEventListener('click', e => {
    // what indicator was clicked on
    
    const targetDot = e.target.closest('button');
    
    if (targetDot) return;
    
    const currentSlide = track.querySelector('.currentSlide');
    const currentDot = nav.querySelector('.currentSlide');
    
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    
});