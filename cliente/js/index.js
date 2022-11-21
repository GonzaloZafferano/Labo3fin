const URL = "http://localhost:3000/mascotas";

import {obtenerElementosAJAX} from "./ajax.js";

import {obtenerElementosFETCH} from "./fetch.js";

import {obtenerElementosAXIOS} from "./axios.js";


const $spinner = document.getElementById("spinner");
const $contenidoDinamico = document.getElementById("contenidoDinamico");

cargarArticulosEnPagina();

function cargarArticulosEnPagina(){       
    setSpinner();
    obtenerElementosFETCH(URL)
    //obtenerElementosAXIOS(URL)
    //obtenerElementosAJAX(URL)
    .then(datos => crearArticulos(datos))
    .catch(error => console.error(error))
    .finally(x => removeSpinner());    
};

function crearArticulo(item) {
    const divCard = document.createElement("div");
    const articulo = document.createElement("article");
    const titulo = document.createElement("h3");
    const precio = document.createElement("p");
    const descripcion = document.createElement("p");
    const raza = document.createElement("p");
    const fecha = document.createElement("p");
    const vacunas = document.createElement("p");
    const boton = document.createElement("button");

    const iraza = document.createElement("i");
    const ivacunas = document.createElement("i");
    const ifecha = document.createElement("i");

    const divraza = document.createElement("div");
    const divvacunas = document.createElement("div");
    const divfecha = document.createElement("div");
    const divCaracteristicas = document.createElement("div");

    divvacunas.appendChild(vacunas);
    divfecha.appendChild(fecha);
    divraza.appendChild(raza);

    divCaracteristicas.appendChild(divraza);
    divCaracteristicas.appendChild(divfecha);
    divCaracteristicas.appendChild(divvacunas);

    vacunas.appendChild(ivacunas);
    fecha.appendChild(ifecha);
    raza.appendChild(iraza);

    ifecha.setAttribute("class", "fas fa-dove");
    ivacunas.setAttribute("class", "fas fa-syringe");
    iraza.setAttribute("class", "fas fa-dog");
    titulo.classList.add("card-title");
    raza.classList.add("card-text");
    vacunas.classList.add("card-text");
    fecha.classList.add("card-text");
    descripcion.classList.add("card-text");
    precio.classList.add("card-text");
    divCard.classList.add("card");
    divCard.classList.add("mb-3");
    boton.classList.add("btn");
    boton.classList.add("btn-success");
    divCard.classList.add("estiloParaArticulo");

    divCard.appendChild(titulo);

    articulo.appendChild(titulo);
    articulo.appendChild(descripcion);
    articulo.appendChild(precio);
    articulo.appendChild(divCaracteristicas);
    articulo.appendChild(boton);

    titulo.appendChild(document.createTextNode(item.titulo));
    vacunas.appendChild(document.createTextNode(item.vacuna));
    precio.appendChild(document.createTextNode(item.precio));
    raza.appendChild(document.createTextNode(item.raza));
    fecha.appendChild(document.createTextNode(item.fecha));
    descripcion.appendChild(document.createTextNode(item.descripcion));

    const i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-paw");    
    boton.appendChild(i);
    boton.appendChild(document.createTextNode("Ver Mascota"));

    articulo.classList.add("estiloParaArticulo");

    return articulo;
}

function crearArticulos(listado) {
    const fragmento = document.createDocumentFragment();
    listado.forEach(item => {
        fragmento.appendChild(crearArticulo(item));
    });
    $contenidoDinamico.appendChild(fragmento);
}

function setSpinner () {
    if(!$spinner.hasChildNodes()){
        const i = document.createElement("i");
        $spinner.classList.add("m-5");
        i.setAttribute("class", "fas fa-paw fa-spin");
        $spinner.appendChild(i);
    }
}

function removeSpinner (){
    while($spinner.hasChildNodes()){
        $spinner.removeChild($spinner.firstElementChild);
    }
    $spinner.classList.remove("m-5");
}