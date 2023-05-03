let length = 0 //initial length of the text
const homePageText = 'Hello, I’m Zhanerke! Your Personal Health Coach for high-quality life!' //the text itself
const homePageTextContainer = document.getElementById('home-page-text') //a div which will contain the text

let typingFunc = () => { 
    let char = homePageText.charAt(length++) //run through the string and increasing initial length
    let charElem = document.createTextNode(char) //createTextNode brings a char and put it into text node which will be displayed
    homePageTextContainer.appendChild(charElem) //char by char will be displayed in the div container with the id #home-page__text
    length < homePageText.length + 1 ? setTimeout('typingFunc()', 100) : homePageText = '' 
    //call this function using time delay by 0.1s until the initial length is smaller than text length
}

document.addEventListener('DOMContentLoaded', function() { //when the html document is completely loaded, event with the function will be worked
    typingFunc()
})


document.addEventListener('DOMContentLoaded', function() {
    let slider = document.getElementById('food-slider');
    let slideItem = document.querySelectorAll('.slide');
    let prevBtn = document.getElementById('btn-prev');
    let nextBtn = document.getElementById('btn-next');
    let curr = 0;

    let moveToNext = () => {
        let idx = (curr+1)%slideItem.length
        slideItem[curr].style.opacity = '0';
        slideItem[idx].style.opacity = '1';
        curr = idx;
    }

    let moveToPrev = () => {
        let idx = (curr+slideItem.length-1)%slideItem.length
        slideItem[curr].style.opacity = '0';
        slideItem[idx].style.opacity = '1';
        curr = idx;
    }
    
    slideItem[curr].style.opacity = '0';
    slideItem[curr].style.opacity = '1';

    prevBtn.addEventListener('click', function() {
        moveToPrev();
    });

    nextBtn.addEventListener('click', function() {
        moveToNext();
    });
});

