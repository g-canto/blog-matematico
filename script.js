const title = document.getElementById("title");

title.addEventListener("click", () => {
  title.classList.toggle("title-color-change");
});

const cardToggleButtons = document.querySelectorAll(".content-card-title");

cardToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextElement = button.parentElement.nextElementSibling;
    nextElement.classList.toggle("hidden");
  });
});

const contentContainer = document.querySelector(".content");

contentContainer.addEventListener("click", (event) => {
  const target = event.target.closest("td, li");

  if (target && target.tagName !== "TH") {
    target.classList.toggle("selected");
  }
});
