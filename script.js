const contenedorLista = document.getElementById("entry-list");

if (
  typeof publicacionesOrdenadas !== "undefined" &&
  publicacionesOrdenadas.length > 0
) {
  publicacionesOrdenadas.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = /* HTML */ `
      <article class="entry">
        <div class="entry-header">
          <a class="entry-title" href="entrada.html?id=${post.id}"
            >${post.titulo}</a
          >
          <time class="entry-date">${post.fecha}</time>
        </div>
        <p class="entry-description">${post.resumen}</p>
      </article>
    `;
    contenedorLista.appendChild(li);
  });
} else {
  contenedorLista.innerHTML = "<li>No hay entradas publicadas aún.</li>";
}
