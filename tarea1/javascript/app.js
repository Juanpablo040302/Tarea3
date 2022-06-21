let $boton = document.getElementById("boton")

$boton.addEventListener("click",(e)=>{ //le creamos un evento de escucha click al boton para poder cuardar los datos en el localStorage


    let nombre = document.getElementById("nombre").value // creamos la variable nombre que va a hacer igual a la propiedad value del elemento que tiene como propiedad id "nombre"
    
    let precio = document.getElementById("precio").value // creamos la variable precio que va a hacer igual a la propiedad value del elemento que tiene como propiedad id "precio"
    
       let producto = {
           nombre,
           precio,
       } //creamos un opjeto llamado producto que tiene como propiedades y almacena nombre y precio

if (localStorage.getItem('productos') === null) {
    let productos = [];
    productos.push(producto)
    localStorage.setItem('productos', JSON.stringify(productos))
} //evaluamos si existe un valor llamado productos y si es igual a null empesamos a agregar productos

else{
let productos = JSON.parse(localStorage.getItem('productos'))
productos.push(producto)
localStorage.setItem('productos', JSON.stringify(productos));
} //de lo contrario si ya existen valores o productos dentro empezamos a actualizarlo


})

function getProductos() {
    let productos = JSON.parse(localStorage.getItem('productos')); 
    let $tbady = document.getElementById("tbady");
    
    for (let i = 0; i < productos.length; i++) {
       
        let nombre = productos[i].nombre;
        let precio = productos[i].precio;
      
      
        let $listaproducto = `  <tr>
         
            <td>${nombre}</td>
<td> ${precio} </td>

 <td style = "width:1px;"> <img src = "./public/img/detele.svg"
 id = "delete"
 onclick = deletep('${nombre}')
 style = "height: 30px; margin-left: 1px; cursor: pointer;"> </td>
        </tr>`;
 
      $tbady.insertAdjacentHTML("beforeend", $listaproducto)
    }
} // esta funcion sirve para optener los datos desde el localStorage e insertarlos dinamicamente en nuestro html

function deletep(nombre) {
    let productos = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < productos.length; i++) {
       
        if (productos[i].nombre == nombre ) {
            productos.splice(i, 1);
        }   
    }
    location.reload()
    localStorage.setItem('productos', JSON.stringify(productos))
    
    getProductos()
    
} // esta funcion lo que hace es que elimina los datos del localStorage con la funcion splice la cual sirve para remplazar eliminar o sobre escribir elementos de una matris y devuelve una matris con los elementos mopdificados o eriminas si existen, luego simplemente actualiza el localStorage con los datos de la nueva matris devuelta por la funcion splice

 getProductos() //invoca la funcion getProductos
 
