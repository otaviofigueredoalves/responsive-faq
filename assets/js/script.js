"use strict" 


const subtitles = document.querySelectorAll(".faq-title");
const texts = document.querySelectorAll(".faq-text");
const images = document.querySelectorAll(".icon");

subtitles.forEach((subtitle, index) => {
    subtitle.addEventListener('click', () =>{

        texts[index].classList.toggle('open-faq');

        if(images[index].getAttribute('src') === 'assets/images/icon-plus.svg'){
            images[index].setAttribute('src','assets/images/icon-minus.svg');
        } else {
            images[index].setAttribute('src','assets/images/icon-plus.svg');
        }

    });    
})
