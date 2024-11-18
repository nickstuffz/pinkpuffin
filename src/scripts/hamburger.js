document.querySelector("#hamburger").addEventListener("click", () => {
  const menu = document.querySelector("#menu");
  const menuContainer = document.querySelector("#menu-container");
  if (menu.style.display === "none") {
    menu.style.display = "flex";

    menuContainer.classList.remove("opacity-0");
    menuContainer.classList.add("h-svh", "opacity-100");
  } else {
    menu.style.display = "none";

    menuContainer.classList.remove("h-svh", "opacity-100");
    menuContainer.classList.add("opacity-0");
  }
});
