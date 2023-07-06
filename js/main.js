// trailer functionality
const trailer = document.querySelector(".trailer");

window.addEventListener("click", () => {
  trailer.style.backgroundImage = `url("./assets/cursor-click.svg")`;
  setTimeout(() => {
    trailer.style.backgroundImage = `url("./assets/cursor.svg")`;
  }, 100);
});

window.addEventListener("mousemove", (e) => {
  animate(e);
});

function animate(e) {
  const x = e.clientX - trailer.offsetWidth / 8;
  const y = e.clientY - trailer.offsetWidth / 4;

  trailer.style.transform = `translate(${x}px, ${y}px)`;
}

// menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const menuOverlay = document.querySelector(".menu-overlay");
const overlayContent = document.querySelector(".overlay-content");
const backToDefault = document.querySelector(".back-to-default");
const menuContent = document.querySelector(".menu-content");
const contentInfo = document.querySelector(".content-info");
const primaryNavItems = document.querySelectorAll(".primary-nav__list li");

menuToggle.addEventListener("click", () => {
  menuOverlay.toggleAttribute("data-visible");

  if (menuOverlay.hasAttribute("data-visible")) {
    menuToggle.setAttribute("aria-expanded", true);
    backToDefault.classList.remove("spread-up");
    setTimeout(() => {
      menuContent.style.opacity = "1";
      itemsScale(1);
    }, 1200);
    setTimeout(() => {
      itemsRotate();
    }, 1700);
    setTimeout(() => {
      infoTranslate(0);
    }, 1700);
    setTimeout(() => {
      overlayContent.classList.add("spread-up");
    }, 1);
    backToDefault.style.zIndex = "999";
  } else {
    menuContent.style.opacity = "0";
    itemsScale(0);
    infoTranslate(20);
    primaryNavItems.forEach((item) => {
      item.style.transform = `rotate(0deg)`;
    });
    overlayContent.classList.remove("spread-up");
    menuToggle.setAttribute("aria-expanded", false);
    setTimeout(() => {
      backToDefault.classList.add("spread-up");
    }, 1);
    setTimeout(() => {
      backToDefault.style.zIndex = "-1";
    }, 800);
  }
});

function itemsScale(scale) {
  primaryNavItems.forEach((item) => {
    item.style.scale = `${scale}`;
  });
}

function itemsRotate() {
  let deg = -25;
  primaryNavItems.forEach((item, index) => {
    index === 1 ? (deg = 25) : deg;
    index === 2 ? (deg = -10) : deg;
    index === 3 ? (deg = -15) : deg;
    item.style.transform = `rotate(${deg}deg)`;
  });
}

function infoTranslate(distance) {
  contentInfo.style.transform = `translateY(${distance}rem)`;
}
