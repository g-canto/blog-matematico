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

const contenedorLista = document.getElementById("lista-entradas");

if (typeof publicaciones !== "undefined" && publicaciones.length > 0) {
  publicaciones.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
                    <a class="entry-title" href="entrada.html?id=${post.id}">${post.titulo}</a>
                    <span class="entry-date">${post.fecha}</span>
                    <p class="entry-description">${post.resumen}</p>
                `;
    contenedorLista.appendChild(li);
  });
} else {
  contenedorLista.innerHTML = "<li>No hay entradas publicadas aún.</li>";
}
