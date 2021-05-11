const share = document.querySelector(".share");
const pop_up = document.querySelector(".pop-up");

share.addEventListener("click", () => {
  pop_up.classList.toggle("hidden");
});
