/* Back to Top 
from Matthew Cain on Codepen
https://codepen.io/matthewcain/pen/ZepbeR
*/

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

/* end of Back to Top script */


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

// moves slides 

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('currentSlide');
    targetDot.classList.add('currentSlide');
};


// left click
previousButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = nav.querySelector('.currentSlide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, previousSlide);
    updateDots(currentDot, prevDot);

});


// right click
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = nav.querySelector('.currentSlide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

});



// indicator click

nav.addEventListener('click', e => {
    // what indicator was clicked on

    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.currentSlide');
    const currentDot = nav.querySelector('.currentSlide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);


});