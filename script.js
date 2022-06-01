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
    delay: 1,
}) 

function rmvGreeting() {
  gsap.to(".greeting", {
    delay: .5, duration: 2, opacity: 0, ease: 'power1.in'
  })

  function zindex() {
    const greeting = document.querySelector('.greeting').style.zIndex = '-1';
  }

  setTimeout(zindex, 2600);
  
}

setTimeout(rmvGreeting, 3500);

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

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    navList.classList.toggle('show');
})

// Sphere animation

const myTags = ['CSS', '*', 'HTML', 'JavaScript', '*', 'VS Code', 'Figma', '*', 'GrrenSock', 'SQL', '*',
'PL/SQL', 'ProCreate', '*', 'GitHub', 'React', '*', 'C', 'Python', '*', 'Java', 'Linux', '*', 'Oracle'];

 let tagCloud = TagCloud('.content', myTags,{
  radius: 300,
  maxSpeed: 'fase',
  initSpeed: 'fast',
  direction: 135,
  keep: true
});

function responsive(a) {
  if (a.matches) {
    tagCloud = TagCloud('.responsive', myTags,{
      radius: 240,
      maxSpeed: 'fase',
      initSpeed: 'fast',
      direction: 135,
      keep: true
    });
}
}

function responsive(b) {
  if (b.matches) {
    tagCloud = TagCloud('.responsive', myTags,{
      radius: 180,
      maxSpeed: 'fase',
      initSpeed: 'fast',
      direction: 135,
      keep: true
    });
}
}

let a = window.matchMedia("(max-width: 820px")
responsive(a);
a.addEventListener(responsive);

let b = window.matchMedia("(max-width: 500px)")
responsive(b);
b.addEventListener(responsive);

// Contacts

const contactBtn = document.querySelector('#contact-btn');
contactBtn.addEventListener('click', ()=> {
  Swal.fire({
    title: 'I appreciate your time!',
    text: "Your message has been sent. I'll get back to you asap",
    imageUrl: "thankyou.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Thank You',
  })
})