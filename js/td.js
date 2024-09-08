const phone = document.querySelector(".techStack__phone");
const tabs = document.querySelector(".techStack__tabs");
const screen = document.querySelector(".techStack__screen");
const cloud = document.querySelector(".techStack__cloud");
const form = document.querySelector(".techStack__illustration");
const ret = document.querySelector(".techStack__illustration-return");
const overlayOn = document.querySelector(".overlayOn");
const coreteam__tab1 = document.getElementById("elem1");
const coreteam__tab2 = document.getElementById("elem2");
const coreteam__tab3 = document.getElementById("elem3");
const coreteam__tab4 = document.getElementById("elem4");

const swiper = new Swiper('.swiper', {
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  slidesPerView: 1.1,
  loop: true,

  // autoplay: {

  //   delay: 1000,
  //   // stopOnLastSlide: true,
  //   disableOnInteraction: false
  // }
  breakpoints: {
    350:{
      slidesPerView: 1.2,   
    },
    420:{
      slidesPerView: 1.5,   
    },
    520:{
      slidesPerView: 2,   
    },
    720 :{
      slidesPerView: 2.5,   
    },
    900 :{
      slidesPerView: 3,   
    },
    1150 :{
      slidesPerView: 4,   
    }
  }
});


coreteam__tab1.addEventListener('click', (event) => {
  const tastHTML = `
  <div class="overlay">
  <div class="modal__overlay"></div>
  <div class="modal__wrapper">
    <div class="modal">
      <img class="modal__wrapper-svg" src="images/close.svg" alt="">
      <div class="cr__modal">
        <div class="coreteam__tab-box">
          <div class="coreteam__tab-visege">
            <img src="images/team-1.svg" alt="" class="">
          </div>
        </div>
        <div class="modal__text">
          <p class="modal__text-name">Andrew Whalle</p>
          <p class="modal__text-position">Founder of company</p>
          <p class="modal__text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
  document.querySelector('body').style.overflow = "hidden";
  overlayOn.insertAdjacentHTML("beforeend",
    tastHTML);
    const overlayOff = document.querySelector(".modal__overlay");
    const closeSvg = document.querySelector(".modal__wrapper-svg");
    closeSvg.addEventListener('click', (event) => {
      document.querySelector(".overlay").remove(); 
      document.querySelector('body').style.overflow = "visible";
    })
    overlayOff.addEventListener('click', (event) => {
      document.querySelector(".overlay").remove();
      document.querySelector('body').style.overflow = "visible";
    })
})

coreteam__tab2.addEventListener('click', (event) => {
  const tastHTML = `
  <div class="overlay">
  <div class="modal__overlay"></div>
  <div class="modal__wrapper">
    <div class="modal">
      <img class="modal__wrapper-svg" src="images/close.svg" alt="">
      <div class="cr__modal">
        <div class="coreteam__tab-box">
          <div class="coreteam__tab-visege">
            <img src="images/team-2.svg" alt="" class="">
          </div>
        </div>
        <div class="modal__text">
          <p class="modal__text-name">Andrew Whalle</p>
          <p class="modal__text-position">Founder of company</p>
          <p class="modal__text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
  document.querySelector('body').style.overflow = "hidden";
  overlayOn.insertAdjacentHTML("beforeend",
    tastHTML);
    const overlayOff = document.querySelector(".modal__overlay");
    const closeSvg = document.querySelector(".modal__wrapper-svg");
    closeSvg.addEventListener('click', (event) => {
      document.querySelector(".overlay").remove(); 
      document.querySelector('body').style.overflow = "visible";
    })
    overlayOff.addEventListener('click', (event) => {
      document.querySelector(".overlay").remove();
      document.querySelector('body').style.overflow = "visible";
    })
})

coreteam__tab3.addEventListener('click', (event) => {
  const tastHTML = `
  <div class="overlay">
  <div class="modal__overlay"></div>
  <div class="modal__wrapper">
    <div class="modal">
      <img class="modal__wrapper-svg" src="images/close.svg" alt="">
      <div class="cr__modal">
        <div class="coreteam__tab-box">
          <div class="coreteam__tab-visege">
            <img src="images/team-3.svg" alt="" class="">
          </div>
        </div>
        <div class="modal__text">
          <p class="modal__text-name">Andrew Whalle</p>
          <p class="modal__text-position">Founder of company</p>
          <p class="modal__text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
  document.querySelector('body').style.overflow = "hidden";
  overlayOn.insertAdjacentHTML("beforeend",
    tastHTML);
    const overlayOff = document.querySelector(".modal__overlay");
    const closeSvg = document.querySelector(".modal__wrapper-svg");
    closeSvg.addEventListener('click', (event) => {
      document.querySelector(".overlay").remove(); 
      document.querySelector('body').style.overflow = "visible";
    })
    overlayOff.addEventListener('click', (event) => {
      document.querySelector(".overlay").remove();
      document.querySelector('body').style.overflow = "visible";
    })
})

coreteam__tab4.addEventListener('click', (event) => {
const tastHTML = `
<div class="overlay">
<div class="modal__overlay"></div>
<div class="modal__wrapper">
  <div class="modal">
    <img class="modal__wrapper-svg" src="images/close.svg" alt="">
    <div class="cr__modal">
      <div class="coreteam__tab-box">
        <div class="coreteam__tab-visege">
          <img src="images/team-4.svg" alt="" class="">
        </div>
      </div>
      <div class="modal__text">
        <p class="modal__text-name">Andrew Whalle</p>
        <p class="modal__text-position">Founder of company</p>
        <p class="modal__text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
</div>
</div>
`;
document.querySelector('body').style.overflow = "hidden";
overlayOn.insertAdjacentHTML("beforeend",
  tastHTML);
  const overlayOff = document.querySelector(".modal__overlay");
  const closeSvg = document.querySelector(".modal__wrapper-svg");
  closeSvg.addEventListener('click', (event) => {
    document.querySelector(".overlay").remove(); 
    document.querySelector('body').style.overflow = "visible";
  })
  overlayOff.addEventListener('click', (event) => {
    document.querySelector(".overlay").remove();
    document.querySelector('body').style.overflow = "visible";
  })
})

ret.addEventListener('click', (event) => {
  form.classList.remove('main-phone');
  form.classList.remove('main-tabs');
  form.classList.remove('main-screen');
  form.classList.remove('main-cloud');
})

phone.addEventListener('click', (event) => {
form.classList.add('main-phone');
form.classList.remove('main-screen');
form.classList.remove('main-tabs');
form.classList.remove('main-cloud');
})

tabs.addEventListener('click', (event) => {
  form.classList.add('main-tabs');
  form.classList.remove('main-phone');
  form.classList.remove('main-screen');
  form.classList.remove('main-cloud');
})

screen.addEventListener('click', (event) => {
  form.classList.add('main-screen');
  form.classList.remove('main-phone');
  form.classList.remove('main-tabs');
  form.classList.remove('main-cloud');
})

cloud.addEventListener('click', (event) => {
  form.classList.add('main-cloud');
  form.classList.remove('main-phone');
  form.classList.remove('main-tabs');
  form.classList.remove('main-screen');
})