const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');
const dot1 = document.querySelector('.dot.one');
const dot2 = document.querySelector('.dot.two');
const dot3 = document.querySelector('.dot.three');
const dot4 = document.querySelector('.dot.four');
const dot5 = document.querySelector('.dot.five');

console.log(dot1);

leftBtn.addEventListener('click', () => {
    let currentImg = document.querySelector('.current');
    let className = currentImg.className;
    let num = className.length;
    let imgNum = className.substring(0, num-8);

    if( imgNum === "one") {
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.five');
        newImg.classList.add('current');

        dot1.classList.remove('this');
        dot5.classList.add('this');
    } else if ( imgNum === "five" ){
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.four');
        newImg.classList.add('current');

        dot5.classList.remove('this');
        dot4.classList.add('this');
    } else if ( imgNum === "four" ){
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.three');
        newImg.classList.add('current');

        dot4.classList.remove('this');
        dot3.classList.add('this');
    } else if ( imgNum === "three" ){
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.two');
        newImg.classList.add('current');

        dot3.classList.remove('this');
        dot2.classList.add('this');
    } else if ( imgNum === "two" ){
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.one');
        newImg.classList.add('current');

        dot2.classList.remove('this');
        dot1.classList.add('this');
    }
})

rightBtn.addEventListener('click', () => {
    let currentImg = document.querySelector('.current');
    let className = currentImg.className;
    let num = className.length;
    let imgNum = className.substring(0, num-8);

    if( imgNum === "one") {
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.two');
        newImg.classList.add('current');

        dot1.classList.remove('this');
        dot2.classList.add('this');
    } else if ( imgNum === "two" ){
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.three');
        newImg.classList.add('current');

        dot2.classList.remove('this');
        dot3.classList.add('this');
    } else if ( imgNum === "three" ){
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.four');
        newImg.classList.add('current');

        dot3.classList.remove('this');
        dot4.classList.add('this');
    } else if ( imgNum === "four" ){
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.five');
        newImg.classList.add('current');

        dot4.classList.remove('this');
        dot5.classList.add('this');
    } else if ( imgNum === "five" ){
        currentImg.classList.remove('current');
        let newImg = document.querySelector('.one');
        newImg.classList.add('current');

        dot5.classList.remove('this');
        dot1.classList.add('this');
    }
})