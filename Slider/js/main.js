"use strict";

//FOR SLIDER

let pos = 0;

let lenta = document.querySelector('.slide-wrapper ul');

document.querySelector('.rightIcon').addEventListener("click", function(){
    slideRight();
})

document.querySelector('.leftIcon').addEventListener("click", function(){
    slideLeft();
})

function slideRight(){
    pos++;

    if(lenta.querySelectorAll("li").length == pos)
        pos = 0;

    lenta.style.left = -(pos * 1100) + "px";

    lenta.appendChild(lenta.firstElementChild.cloneNode(pos));
}

function slideLeft(){
    pos--;

    if(pos == -1)
        pos = lenta.querySelectorAll("li").length - 1;

    lenta.style.left = -(pos * 1100) + "px";
}


//FOR OPENING NAV PAGE
document.querySelector(".open-icon").addEventListener("click", function(){
    document.querySelector('.layout').classList.add('active');
})

//FOR CLOSING NAV PAGE
document.querySelector(".layout span").addEventListener("click", function(){
    document.querySelector('.layout').classList.remove('active');
})