gsap.from('#name', {delay: .5, duration: 3, scale: 0, ease: "elastic"});

gsap.from('.nav-btn', {delay: .5, duration: 3.5, rotation: 720});

// Navigation

const burger = document.querySelector('.nav-btn');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    navList.classList.toggle('show');
})

// Procreate

const back = document.querySelector('#back');
const next = document.querySelector('#next');
const number = document.querySelector('#number');
const outof = document.querySelector('#outof');

const photos = ['img/projects/livingroom.jpg',
                'img/projects/military.jpg', 
                'img/projects/kitchen.jpg', 
                'img/projects/black_bathroom.jpg', 
                'img/projects/blue_sofa.jpg', 
                'img/projects/livingroom_bed.jpg', 
                'img/projects/manscave.jpg', 
                'img/projects/fireplace.jpg', 
                'img/projects/toilet.jpg'];

let i = 0;
let count = 1;
let total = photos.length
number.innerText = count;
outof.innerText = total;

next.addEventListener('click', () => {
    i++;
    count++;

    if (i > total - 1) {
        i = 0;
        count = 1;
    }

    document.querySelector('#procreate-img').src = photos[i];

    number.innerText = count;
    outof.innerText = total;
})

back.addEventListener('click', () => {
    i--;
    count--;

    if (i < 0) {
        i = total - 1;
        count = total;
    }

    document.querySelector('#procreate-img').src = photos[i];

    number.innerText = count;
    outof.innerText = total;
})

// Projects

const project = document.querySelectorAll('.project');

project.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeClass();

        item.classList.add('selected');
    })

    removeClass = () => {
        project.forEach(item => {
            item.addEventListener('mouseout', () => {
                item.classList.remove('selected');
            })
        })
    }
})

function responsive(a, b) {
    if (a.matches || b.matches) {
        project.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('selected');
            })
        })
    }
}
  
let a = window.matchMedia("(max-width: 820px")
responsive(a);
a.addEventListener(responsive);

let b = window.matchMedia("(max-width: 500px")
responsive(b);
b.addEventListener(responsive);
