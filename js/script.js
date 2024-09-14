const form = document.querySelector(".techStack__illustration");
const overlayOn = document.querySelector(".overlayOn");
const overlayCoreteamForm = document.querySelector(".coreteam__tabs");

overlayCoreteamForm.addEventListener('click', (event) => {
  switch (event.target.dataset.action){
    case ('team-1'): 
      overlayShow("images/team-1.svg", "Andrew Whalle","Founder of company","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    break;
    case ('team-2'): 
      overlayShow("images/team-2.svg", "Valentina Dialektova","UX/ UI Designer","text 2");
    break;
    case ('team-3'): 
      overlayShow("images/team-3.svg", "Vitaliy Sokolov","Developer","text 3");
    break;
    case ('team-4'): 
      overlayShow("images/team-4.svg", "Viktoria Moroz","Copywriter","text 4");
    break;  
  }
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 1.1,
  loop: true,
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


form.addEventListener('click', (event) => {
  let taskss = ['main-phone','main-tabs','main-screen','main-cloud'];
  switch (event.target.dataset.action){
    case ('techStack-phone'): 
      taskss.forEach((element) => form.classList.remove(element));
      form.classList.add('main-phone');
    break;
    case ('techStack-tabs'): 
      taskss.forEach((element) => form.classList.remove(element));
      form.classList.add('main-tabs');
    break;
    case ('techStack-screen'): 
      taskss.forEach((element) => form.classList.remove(element));
      form.classList.add('main-screen');
    break;
    case ('techStack-cloud'): 
      taskss.forEach((element) => form.classList.remove(element));
      form.classList.add('main-cloud'); 
    break;
    case ('techStack-return'): 
    taskss.forEach((element) => form.classList.remove(element));
    break;
  }
})

function overlayShow(srcImjlink, overlayName, overlayPosition, overlayText) {
  const tastHTML = `
  <div class="overlay">
  <div class="modal__overlay"></div>
  <div class="modal__wrapper">
    <div class="modal">
      <img class="modal__wrapper-svg" src="images/close.svg" alt="">
      <div class="cr__modal">
        <div class="coreteam__tab-box">
          <div class="coreteam__tab-visege">
            <img src="${srcImjlink}" alt="" class="">
          </div>
        </div>
        <div class="modal__text">
          <p class="modal__text-name">${overlayName}</p>
          <p class="modal__text-position">${overlayPosition}</p>
          <p class="modal__text-description">${overlayText}</p>
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
};