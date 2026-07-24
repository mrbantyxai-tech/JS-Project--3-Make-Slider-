const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dots span");
const cards = document.querySelectorAll(".card");

let current = 0;

function updateSlider(){

    slides.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    cards.forEach(card => card.classList.remove("active"));

    dots[current].classList.add("active");
    cards[current].classList.add("active");
}

function goNext(){

    current++;

    if(current >= totalSlides.length){

        current = 0;
    }

    updateSlider();
}

function goPrev(){

    current--;

    if(current < 0){

        current = totalSlides.length - 1;
    }

    updateSlider();
}

dots.forEach((dot,index)=>{

    dot.onclick=()=>{

        current=index;

        updateSlider();

    }

});

cards.forEach((card,index)=>{

    card.onclick=()=>{

        current=index;

        updateSlider();

    }

});

// setInterval(goNext,3000);