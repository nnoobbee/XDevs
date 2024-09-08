
const bodyM = document.querySelector(".overlay");
const ret = document.querySelector(".techStack__illustration-return");


ret.addEventListener('click', (event) => {
  const tastHTML = `
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
  `;
  bodyM.insertAdjacentHTML("beforeend",
    tastHTML);
  // bodyM.style.display = "block";
})
