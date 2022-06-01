// Navigation

const burger = document.querySelector('.nav-btn');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    navList.classList.toggle('show');
})

// Projects

const project = document.querySelectorAll('.project');
console.log(project);

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

// Procreate

const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ['img/projects/livingroom.jpg', 'img/projects/military.jpg', 'img/projects/kitchen.jpg', 'img/projects/black_bathroom.jpg', 'img/projects/blue_sofa.jpg', 'img/projects/livingroom_bed.jpg', 'img/projects/manscave.jpg', 'img/projects/fireplace.jpg', 'img/projects/toilet.jpg'];

let i = 0;

next.addEventListener('click', () => {
    i++;

    if (i > photos.length - 1) {
        i = 0;
    }

    document.querySelector('#procreate-img').src = photos[i];
})

back.addEventListener('click', () => {
    i--;

    if (i < 0) {
        i = photos.length - 1;
    }

    document.querySelector('#procreate-img').src = photos[i];
})