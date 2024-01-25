class Comentario {
    id; texto; estrellas; nombreUsuario;
    constructor(id, texto, estrellas, nombreUsuario) {
        this.id = id;
        this.texto = texto;
        this.estrellas = estrellas;
        this.nombreUsuario = nombreUsuario;
    }
    obtenerComentario() {
        const comentario = {
            id: this.id, texto: this.texto, estrellas: this.estrellas, nombreUsuario: this.nombreUsuario
        }
        return comentario;
    }
    editarComentario(texto) {
        this.texto = texto;
    }
    editarEstrellas(estrellas) {
        this.estrellas = estrellas;
    }
}
class Comentarios {
    datos = [];
    id = 0;
    obtenerComentario(id) {
        const comentario = this.datos.find((coment) => (coment.id === id));
        if (!comentario) return;
        const comentarioEncontrado = new Comentario(id, comentario.texto, comentario.estrellas, comentario.nombreUsuario);
        return comentarioEncontrado;
    }
    añadirComentario(texto, estrellas, nombreUsuario) {
        const comentario = new Comentario(this.id, texto, estrellas, nombreUsuario);
        this.id = this.id + 1;
        this.datos.push(comentario.obtenerComentario());
    }
    modificarComentario(nuevoComentario) {
        const id = nuevoComentario.id;
        const comentario = this.obtenerComentario(id);
        comentario.editarComentario(nuevoComentario.texto);
        for (let i = 0; i < this.datos.length; i++) {
            const comentarioActual = this.datos[i];
            if (comentarioActual.id !== id) continue;
            console.log("comentario a modificar:", comentarioActual);
            this.datos[i] = comentario.obtenerComentario(id);
        }
        console.log(this.datos, "datos Modificados");
    }
}
const comentarios = new Comentarios();
const listaComentarios = document.getElementById("comentarios");
const botonComentario = document.getElementById("botonComentarios");
const entrada = document.getElementById("entrada");
const usuario = document.getElementById("usuario");
const valoracion = document.getElementById("valoracion");
const editar = document.getElementsByClassName("botonEditar");
function imprimirComentarios() {
    const comentarioDatos = comentarios.datos;
    for (let comentario in comentarioDatos) {
        const comentarioActual = comentarioDatos[comentario];
        console.log(comentarioActual);
        const comentarioElemento = document.createElement("li");
        comentarioElemento.id = comentarioActual.id;
        comentarioElemento.innerHTML = `<div>
        <p>usuario:</p>
        <p>${comentarioActual.nombreUsuario}</p>
        </div>
        <div>
        <p>puntuacion:</p>
        <p>${comentarioActual.estrellas}</p>
        </div>
        <div>
        <p>comentarios:</p>
        <p>${comentarioActual.texto}</p>
        </div> <div> <button id = "${comentarioActual.id}" class = "botonEditar"> editar </button> </div>`;
        listaComentarios.appendChild(comentarioElemento);
    }
}
botonComentario.addEventListener("click", function () {
    const textoComentario = entrada.value;
    const textoUsuario = usuario.value;
    const valoracionPuntaje = valoracion.value;
    comentarios.añadirComentario(textoComentario, textoUsuario, valoracionPuntaje);
    imprimirComentarios();
})
console.log(botonComentario);
