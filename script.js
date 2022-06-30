// Star animation

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 1,
          "color": "#F7FF93"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": .7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": .1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#F7FF93",
        "opacity": 0.4,
        "width": .7
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 2
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  //printing greeting

  gsap.to('.welcome', {
    text: "Welcome, I'm glad you are here!",
    duration: 2,
    repeat: 0,
    ease: 'power1.in',
    yoyo: true,
    delay: .5,
})

function rmvGreeting() {
  gsap.to(".greeting", {
    delay: 4, duration: 2, opacity: 0, ease: 'power1.in'
  })

  function rmvDiv() {
    const greeting = document.querySelector('.greeting').style.display = 'none';
  }

  setTimeout(rmvDiv, 6000);
}

rmvGreeting();

// Portfolio animation

gsap.from('#name', {delay: 8, duration: 3, scale: 0, ease: "elastic"});

gsap.from('.html-css', {delay: 6, x: -800, y: -800, duration: 3, ease: "power4"});

gsap.from('.js', {delay: 6, x: 800, y: -800, duration: 3, ease: "power4"});

gsap.from('.c', {delay: 6, x: -800, y: 800, duration: 3, ease: "power4"});

gsap.from('.procreate', {delay: 6, x: 800, y: 800, duration: 3, ease: "power4"});

// Name

const myName = document.querySelector(".name");
const nameText = document.querySelector("#name");

const about = document.querySelector("#about");

const scrollAmount = -800;
window.addEventListener('scroll', (e) => {
    const {top} = about.getBoundingClientRect();

    if(top - window.innerHeight < scrollAmount) {
      myName.style.backgroundImage = "url('img/me1.jpg')";
      nameText.style.display = 'none';
    }
    
    if(top - window.innerHeight < (scrollAmount * 2)) {
      myName.style.backgroundImage = "url('img/name-bckgrnd.jpg')";
      nameText.style.display = 'block';
    }

    if(top - window.innerHeight > scrollAmount) {
      myName.style.backgroundImage = "url('img/name-bckgrnd.jpg')";
      nameText.style.display = 'block';
    }
})

// Navigation

const burger = document.querySelector('.nav-btn');
const navList = document.querySelector('.nav-list');

const openNav = (e) => {

  gsap.from('.uno', {delay: .5, duration: 1, opacity: 0, y: 20});
  gsap.from('.dos', {delay: 1, duration: 1, opacity: 0, y: 20});
  gsap.from('.tres', {delay: 1.5, duration: 1, opacity: 0, y: 20});

  const closeNav = (evt) => {
    if(e !== evt) {
      navList.classList.toggle('show');
      burger.classList.toggle('active');
      
      document.removeEventListener('click', closeNav);
    }
  }

  if(!navList.classList.contains('show') && !burger.classList.contains('active')) {
    navList.classList.toggle('show');
    burger.classList.toggle('active');

    document.addEventListener('click', closeNav);
  }
}

burger.addEventListener('click', openNav);

// Sphere animation

const myTags = ['HTML', 'CSS', '*', 'JavaScript', 'WordPress', '*', 'VS Code', 'Figma', '*', 'GrrenSock', 'SQL', '*',
'PL/SQL', 'ProCreate', '*', 'Git', 'React', '*', 'C', 'Python', '*', 'Java', 'Linux', '*', 'Oracle'];

 let tagCloud = TagCloud('.content', myTags,{
  radius: 300,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true
});

tagCloud = TagCloud('.responsive-one', myTags,{
    radius: 240,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});

tagCloud = TagCloud('.responsive-two', myTags,{
    radius: 185,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});

const certificate = document.querySelectorAll('.certificate');

certificate.forEach(item => {
  item.addEventListener('click', ()=> {
    item.classList.toggle('zoom');
  })
})
