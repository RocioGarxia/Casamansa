/*
let carritoDeCompras = []
const contenedorProducto = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

mostrarProductos(stockProductos)

function mostrarProductos(array) {
   // array.forEach((x) => { //
   contenedorProductos.innerHTML = ''
    array.forEach((productoNuevo)=>{
        let div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML += `
            <img src= ${x.img} alt="laminas">
            <h2> ${x.lamina}</h2>
            <p> Autor: ${x.autor}</p>
            <p> Técnica: ${x.tecnica}</p>
            <p> Tamaño: ${x.tamaño}</p>
            <p> Número de Serie: ${x.numSerie}</p>
            <p class= "precioProducto"> Precio: $ ${x.precio}</p>
            <button id= ${x.id} class = "boton-agregar"> Agregar <i class = "fas fa-shopping-cart"> </i> </button>
                        `

        contenedorProducto.appendChild(div)

       // let boton = document.getElementById(`${x.id}`) //

       let boton = document.getElementById(`boton${productoNuevo.id}`)
      //  boton.addEventListener('click', () => { agregarAlCarrito(`${x.id}`) }) //

        boton.addEventListener('click', ()=>{
            agregarAlCarrito(productoNuevo.id)
         })
    })
}

// no pude hacer que el contador de un mismo ítem lo cuente como dos con length++, si bien entiendo que esta parte del código es correcta //

function agregarAlCarrito(id) {
    let validar = carritoDeCompras.some(x => x.id == id)
    console.log(validar)
    
    if (validar) {
        console.log(carritoDeCompras)
        let count = document.getElementById(`cantidad${id}`)
        // contadorCarrito.innerText = carritoDeCompras.length++ //
       
        //linea nueva de codigo//

        carritoDeCompras.map(x=>{
            if(x.id == id){
            count.innerText = `cantidad: ${x.cantidad += 1}`
            actualizarCarrito()
        }
    })
        
    }
    else {
        let productoAgregar = stockProductos.filter((el) => el.id == id)[0]
        console.log(productoAgregar)
        carritoDeCompras.push(productoAgregar)
      //nueva linea//
      console.log(carritoDeCompras)
        actualizarCarrito()

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
                <p>${productoAgregar.lamina}</p>
                <p>Precio: $ ${productoAgregar.precio}</p>
                <button id= "eliminar ${productoAgregar.id}" class = "boton-eliminar"> <i class = "fas fa-trash-alt"> </i> </button>
                     `

        contenedorCarrito.appendChild(div)

        //nuevas lineas//

        let count = document.getElementById(`cantidad${id}`)
        carritoDeCompras.map(x=>{
            if(x.id == id){
            count.innerText = `cantidad: ${x.cantidad = 1}`
            actualizarCarrito()
            }
        })

        let botonEliminar = document.getElementById(`eliminar ${productoAgregar.id}`)
        botonEliminar.addEventListener('click', () => {
            botonEliminar.parentElement.remove()
            console.log(botonEliminar.parentElement)
            carritoDeCompras = carritoDeCompras.filter((el) => el.id != productoAgregar.id)
            console.log(carritoDeCompras)
            actualizarCarrito()

        })
    }
}

    function actualizarCarrito() {
      //  contadorCarrito.innerText = carritoDeCompras.length //

      //nueva linea//
      contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0)

        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
        precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
    }

   function revisarLocal () {
        let carritoLocal = JSON.parse(localStorage.getItem('carritoDeCompras'))
        if (carritoLocal){
            carritoLocal.forEach((el)=> agregarAlCarrito(el.id))
        }
    }

    revisarLocal () 

*/

$(document).ready(function(){

    $("#AbrirFormulario").click(function () {
    $("#exampleModal").modal();
    });
    
    $("#EliminarFormulario").click(function () {
    setTimeout (function() {
    location.reload(); }, 5000);
    });

    $("#EnviarFormulario").click(function () {
        setTimeout (function() {
        location.reload(); }, 5000);
        });
}); 
