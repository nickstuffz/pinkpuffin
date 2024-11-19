document.querySelector("#hamburger").addEventListener("click", () => {
  const menu = document.querySelector("#menu");
  const menuContainer = document.querySelector("#menu-container");
  const hamburgerTop = document.querySelector("#hamburger-top");
  const hamburgerMid = document.querySelector("#hamburger-mid");
  const hamburgerBot = document.querySelector("#hamburger-bot");
  if (menu.style.display === "none") {
    menu.style.display = "flex";

    menuContainer.classList.remove("opacity-0");
    menuContainer.classList.add("h-svh", "opacity-100");

    hamburgerTop.classList.add("translate-y-3", "rotate-45");
    hamburgerMid.classList.remove("opacity-100");
    hamburgerMid.classList.add("opacity-0");
    hamburgerBot.classList.add("-translate-y-3", "-rotate-45");
  } else {
    menu.style.display = "none";

    menuContainer.classList.remove("h-svh", "opacity-100");
    menuContainer.classList.add("opacity-0");

    hamburgerTop.classList.remove("translate-y-3", "rotate-45");
    hamburgerMid.classList.remove("opacity-0");
    hamburgerMid.classList.add("opacity-100");
    hamburgerBot.classList.remove("-translate-y-3", "-rotate-45");
  }
});

// testing toggle

const menu = document.querySelector("#menu");
const menuContainer = document.querySelector("#menu-container");
const hamburgerTop = document.querySelector("#hamburger-top");
const hamburgerMid = document.querySelector("#hamburger-mid");
const hamburgerBot = document.querySelector("#hamburger-bot");
menu.style.display = "flex";

menuContainer.classList.remove("opacity-0");
menuContainer.classList.add("h-svh", "opacity-100");

hamburgerTop.classList.add("translate-y-3", "rotate-45");
hamburgerMid.classList.remove("opacity-100");
hamburgerMid.classList.add("opacity-0");
hamburgerBot.classList.add("-translate-y-3", "-rotate-45");
