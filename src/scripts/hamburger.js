document.querySelector("#hamburger").addEventListener("click", () => {
  const menu = document.querySelector("#menu");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    document.querySelector("#sidebar").style.height = "100svh";
  } else {
    menu.style.display = "none";
    document.querySelector("#sidebar").style.height = "auto";
  }
});
