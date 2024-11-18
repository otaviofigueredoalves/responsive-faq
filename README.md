# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/FAQS.avif)



### Links

- Solution URL: [FRONTEND MENTOR SOLUTION](https://www.frontendmentor.io/solutions/responsive-faq-with-flexbox-qI0OTbkP11)
- Live Site URL: [LIVE SITE](otaviofigueredoalves.github.io/responsive-faq)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned to use the 'forEach' loop with DOM interaction to make the FAQ work correctly

```js
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
```

## Author

- Website - [Otavio F.Alves](otaviofigueredoalves.github.io/portfolio)
- Frontend Mentor - [@otaviofigueredoalves](https://www.frontendmentor.io/profile/otaviofigueredoalves)

