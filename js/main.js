
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}
window.onscroll = () => { 

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeout();

}


function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeout(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
    // slidesPerView: 1,
    // spaceBetween: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    loop:true,
    centeredslides: true,
    autoplay: {
        delay: 5400,
        disableoninteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });


var swiper = new Swiper(".featured-slider", {
    // slidesPerView: 1,
     spaceBetween: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    loop:true,
    centeredslides: true,
    autoplay: {
        delay: 5500,
        disableoninteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      450: {
        slidesPerView: 2,
        // spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
      
      1024: {
        slidesPerView: 4,
        // spaceBetween: 50,
      },
    },
  });

var swiper = new Swiper(".arrivals-slider", {
    // slidesPerView: 1,
     spaceBetween: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    loop:true,
    centeredslides: true,
    autoplay: {
        delay: 5500,
        disableoninteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      
      1024: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });


var swiper = new Swiper(".reviews-slider", {
    // slidesPerView: 1,
     spaceBetween: 10,
     grabCursor: true,
    loop:true,
    centeredslides: true,
    autoplay: {
        delay: 5500,
        disableoninteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      
      1024: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });

var swiper = new Swiper(".blogs-slider", {
    // slidesPerView: 1,
     spaceBetween: 10,
     grabCursor: true,
    loop:true,
    centeredslides: true,
    autoplay: {
        delay: 5000,
        disableoninteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      
      1024: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });