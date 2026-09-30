 function cambiarColorTitulo() {
            var titulo = document.getElementById('titulo');
            titulo.classList.toggle('cambio-color');
        }
        function alternarLista(id) {
            var lista = document.getElementById(id);
            lista.classList.toggle('oculto');
        }
        function resaltarElemento(elemento) {
            elemento.classList.toggle('resaltado');
        }