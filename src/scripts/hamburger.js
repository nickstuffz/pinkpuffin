function HamburgerOn() {
  console.log("yommy");
}

document.querySelector("#hamburger").addEventListener("click", () => {
  const menu = document.querySelector("#menu");
  menu.style.display === "none"
    ? (menu.style.display = "flex")
    : (menu.style.display = "none");
});
