const clicktoshow = document.querySelector(".hamburger-button");
const showMenu = document.querySelector(".menu");
const menuLeftSideShow = document.querySelector(".menu-left-side");

clicktoshow.addEventListener("click", function () {
  showMenu.classList.add("menu-onclick");
  menuLeftSideShow.classList.add("menu-show");

  function noscroll() {
    window.scroll(0, 0);
  }
  window.addEventListener("scroll", noscroll);
});

const closeMenu = document.querySelector(".close-button");
closeMenu.addEventListener("click", function () {
  showMenu.classList.remove("menu-onclick");
  menuLeftSideShow.classList.remove("menu-show");

  //   function scroll() {
  //     window.scroll({ auto });
  //   }
  //   window.addEventListener("scroll", scroll);
});

// https://www.youtube.com/watch?v=6eRwCRPy7Tc
