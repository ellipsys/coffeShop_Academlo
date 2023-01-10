/* BASE DE DATOS */
const tarjetas = [
  {
    id: 1,
    titulo: 'Titulo 1',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://coffee.alexflipnote.dev/ACe9gV94lrE_coffee.png',
    category:"capucino",
    price: 2
  },
  {
    id: 2,
    titulo: 'Titulo 2',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/25hdZQ7Z7dI_coffee.jpg",
    category:"pan",
    price: 9
    
  },
  {
    id: 3,
    titulo: 'Titulo 3',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/Dhdy4wxPLo8_coffee.jpg",
    category:"capucino",
    price: 3
  },
  {
    id: 4,
    titulo: 'Titulo 4',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/PIRTSjkfk4E_coffee.jpg",
    category:"capucino",
    price: 4
  },
  {
    id: 5,
    titulo: 'Titulo 5',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/J_1Oz1Z0kVI_coffee.jpg",
    category:"capucino",
    price: 7
  },
  {
    id: 6,
    titulo: 'Titulo 6',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/5nb_JnyXCkM_coffee.png",
    category:"mocacino",
    price: 5
  },
  {
    id: 7,
    titulo: 'Titulo 7',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/CGK7f_cy_2M_coffee.jpg",
    category:"grano",
    price: 4
  },
  {
    id: 8,
    titulo: 'Titulo 8',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/n5M8zOFyIyY_coffee.jpg",
    category:"grano",
    price: 10
  },
  {
    id: 9,
    titulo: 'Titulo 9',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/crK5v7cXmaQ_coffee.png",
    category:"capucino",
    price: 3
  },
  {
    id: 10,
    titulo: 'Titulo 10',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/MMIxMb38NMs_coffee.png",
    category:"capucino",
    price: 8
  },
  {
    id: 11,
    titulo: 'Titulo 11',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/Aqk_f_p4Ew8_coffee.jpg",
    category:"limonada",
    price: 7
  },
  {
    id: 12,
    titulo: 'Titulo 12',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: "https://coffee.alexflipnote.dev/p5Y95e9n2Yk_coffee.jpg",
    category:"grano",
    price: 4
  }
]

/* TEMPLATE
<article class="tarjeta">
  <img src="** IMAGEN **" alt="** TITULO **" class="imagen__tarjeta">
  <div class="cuerpo__tarjeta">
    <h2 class="titulo__tarjeta">** TITULO **</h2>
    <p class="descripcion__tarjeta">
      ** DESCRIPCION **
    </p>
    <button class="agregar__btn" data-id="** ID **">agregar</button>
  </div>
</article>
*/

/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS */
const tarjetasContenedor = document.getElementById('tarjetasContenedor');
const darkMode = document.querySelector(".cabezera");
const tagBody = document.body;
const iconSunDark = document.querySelector(".fa-moon");
const iconCart = document.querySelector(".fa-solid");
const filtros = document.querySelector(".filtros")


window.addEventListener("load",function () {
  const load = document.querySelector(".load");
  setTimeout(() => {
    load.style.display = "none";
  }, 2000);
  
})
darkMode.addEventListener('click',(e)=>{
  if(e.target.classList.contains("icon_dark")){
    tagBody.classList.toggle("darkMode");
    if(tagBody.classList.contains("darkMode")){
      localStorage.setItem("DarkMode","true");
      iconSunDark.classList.remove("fa-moon");
      iconSunDark.classList.add("fa-sun");
    }
    else {
      localStorage.setItem("DarkMode","false");
      iconSunDark.classList.add("fa-moon");
      iconSunDark.classList.remove("fa-sun");
    }
  }

})

/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN EL DOM */
function pintarTarjetas (tarjeta) {
  let html = "";
  tarjeta.forEach(({id, titulo, descripcion, imagen,price}) =>{
  html += `
  <article class="tarjeta" id=${id}>
  <img src="${imagen}" alt="${titulo}" class="imagen__tarjeta">
  <div class="cuerpo__tarjeta">
    <h2 class="titulo__tarjeta">${titulo}</h2>
    <p class="descripcion__tarjeta">
      ${descripcion}
    </p>
    <p class="price">${price} USD</p>
    <button class="agregar__btn" id=${id}>agregar</button>
  </div>
</article>`
  });

  tarjetasContenedor.innerHTML = html
}

/* INVOCAR LA FUNCION */
pintarTarjetas(tarjetas)

/* CREAR UN NUEVO ARREGLO VACIO PARA AGREGAR LAS TARJETAS A LA COLECCION */
let coleccion = JSON.parse(localStorage.getItem("coleccion")) || []
console.log(coleccion);
/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS DE LA COLECCION */

const coleccionContenedor = document.getElementById('coleccionContenedor')
function emptyCart() {
    let html = `
    <div class="car_empy">
    <img src="empy-cart.png" alt="empy_car">
    <h2>Coleccion vacia</h2>
    </div>`;
    coleccionContenedor.innerHTML = html;
  
}
/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN LA COLECCION */
function pintarColeccion() {
  //checkStorage();
  
  let html = "";
  //console.log(coleccion);
  coleccion.forEach(({id, titulo, descripcion, imagen,price,count}) =>{
  html += `
  <article class="tarjeta_coleccion" id=${id}>
  <img src="${imagen}" alt="${titulo}" class="imagen__tarjeta">
  <div class="cuerpo__coleccion">
    <h2 class="titulo__tarjeta">${titulo}</h2>
    <p class="descripcion__tarjeta">
      ${descripcion}
    </p>
    <p class="price">${price * count} USD</p>
    <button class="eliminar__btn" id=${id}>eliminar</button>
  </div>
</article>`
  });

  coleccionContenedor.innerHTML = html
  if(coleccion.length==0){emptyCart()}

}


/* INVOCAR LA FUNCION */

/* CREAR UNA FUNCION PARA AGREGAR UNA TARJETA A LA COLECCION */
function agregarTarjeta (id) {

  //console.log(coleccion);
  let colec = tarjetas.filter(function(j) {
      return j.id == id;
    })
    if(coleccion.includes(colec[0]) && colec[0].count > 0){
      /*
      //console.log(colec[0].count);
      
      if(confirm("El elemento ya existe, desea agregarlo")){
        colec[0].count++;
        //coleccion.push(colec[0]);
        localStorage.setItem("coleccion",JSON.stringify(coleccion));

      }*/
      Swal.fire({
      width: 300,
      title: 'Ya existe en el carrito',
      text: "Agregar de todos modos",
      icon: 'warning',
      background : '#EEEEEE',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, agregar!'
    }).then((result) => {
      if (result.isConfirmed) {
        colec[0].count++;
        //coleccion.push(colec[0]);
        localStorage.setItem("coleccion",JSON.stringify(coleccion));
        pintarColeccion();
      }
    })

    }
    else{
      colec[0].count = 1;
      coleccion.push(colec[0]);
      localStorage.setItem("coleccion",JSON.stringify(coleccion))
    }
  pintarColeccion();
}

/* CREAR UNA FUNCION PARA REMOVER UNA TARJETA A LA COLECCION */
function removerTarjeta (id) {
  const newColec = coleccion.filter(function(cards) {
    return cards.id != id;
  });
  //console.log(newColec);
  coleccion = [...newColec];
  localStorage.setItem("coleccion",JSON.stringify(coleccion))
  if(coleccion.length==0){emptyCart()}
  pintarColeccion();
  
  //checkCart();
}

function checkStorage() {
  let colecStorage = localStorage.getItem("coleccion");
  let storageDark = localStorage.getItem("DarkMode");  
  if(colecStorage != null){
    let newColeccion = JSON.parse(colecStorage);
    //console.log(coleccion = newColeccion);
    //console.log(newColeccion[0]);
    coleccion = newColeccion;
    //console.log(coleccion);
    pintarColeccion();
  }
  if(storageDark == "true"){
    tagBody.classList.toggle("darkMode");
    iconSunDark.classList.add("fa-sun");
    iconSunDark.classList.remove("fa-moon");
  }
  
}
checkStorage();


//checkCart();

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA AGREGAR LAS TARJETAS A LA COLECCION */
tarjetasContenedor.addEventListener('click', (e) => {
  const l = e.target.classList.contains("agregar__btn");;
  if(l){
    const idUser = e.target.id;
    agregarTarjeta(idUser)
  }
  /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
  pintarColeccion();
})

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA REMOVER LAS TARJETAS DE LA COLECCION */
coleccionContenedor.addEventListener('click', (e) => {
  const idColec = e.target.id;
  const btn_del = e.target.classList.contains("eliminar__btn");
  if(btn_del){
    Swal.fire({
    width: 300,
    title: 'Se eliminara este item del carrito',
    text: "Eliminar de todos modos",
    icon: 'warning',
    background : '#EEEEEE',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      removerTarjeta(idColec)
    }
  })
    ;
  }
  /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
  pintarColeccion();
})
function  checkTotal() {
  let total = 0;
  console.log(coleccion);
  coleccion.forEach((e)=>{
    total += e.price*e.count
    console.log(e.price*e.count);
  })
  return total.toString()
}
iconCart.addEventListener("click",(e)=>{
  if(e.target.classList.contains("fa-cart-shopping")){
    let total = checkTotal();
    if(Number(total)>0){
      Swal.fire({
      width: 300,
      title: 'Pago',
      text: `El total es ${total} USD`,
      icon: 'warning',
      background : '#EEEEEE',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar!'
    }).then((result) => {
      if (result.isConfirmed) {
        coleccion = []
        localStorage.setItem("coleccion",JSON.stringify(coleccion))
        pintarColeccion();
      }
    })
    }
    else{
      Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'Nada que pagar',
      showConfirmButton: false,
      timer: 1500
    })
    }
  }
})
filtros.addEventListener("click",function(e) {
  if(e.target.classList.contains("capucino")){
    const filtrado = tarjetas.filter(function (e) {
      return e.category == "capucino"
    })
    pintarTarjetas(filtrado);
  }
  else if(e.target.classList.contains("pan")){
    const filtrado = tarjetas.filter(function (e) {
      return e.category == "pan"
    })
    pintarTarjetas(filtrado)
  }
  else if(e.target.classList.contains("grano")){
    const filtrado = tarjetas.filter(function (e) {
      return e.category == "grano"
    })
    pintarTarjetas(filtrado)
  }
  else if(e.target.classList.contains("limonadas")){
    const filtrado = tarjetas.filter(function (e) {
      return e.category == "limonada"
    })
    pintarTarjetas(filtrado)
  }
  else if(e.target.classList.contains("mocacino")){
    const filtrado = tarjetas.filter(function (e) {
      return e.category == "mocacino"
    })
    pintarTarjetas(filtrado)
  }
  else{
    pintarTarjetas(tarjetas)
  }
  
})
/*
Swal.fire({
  title: 'Custom width, padding, color, background.',
  width: 600,
  padding: '3em',
  color: '#FF597B',
  background: '#716add',
  confirmButtonColor: '#3085d6',

})


Swal.fire({
    position: 'top-end',
    icon: 'warning',
    title: 'Nada que pagar',
    showConfirmButton: false,
    timer: 1500
  })
  


Swal.fire({
  width: 300,
  title: 'Pago',
  text: `El total es ${total} USD`,
  icon: 'warning',
  background : '#EEEEEE',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, agregar!'
}).then((result) => {
  if (result.isConfirmed) {
    coleccion = []
    pintarColeccion();
  }
})
*/
