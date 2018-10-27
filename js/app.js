const button = document.getElementById("show-blocks");
const header = document.querySelector("header");
const main = document.querySelector('main');
const footer = document.querySelector('footer');

button.addEventListener("click", showBlocks);


function showBlocks() {
  header.classList.toggle("active");
  main.classList.toggle("active");
  footer.classList.toggle("active");
}
