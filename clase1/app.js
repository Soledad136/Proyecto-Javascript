let carrito = [];


let opciones = [
  { id: 1, nombre: "Lectura Carta natal", precio: 45000 },
  { id: 2, nombre: "Curso de astrología humanística", precio: 45000 },
  { id: 3, nombre: "Curso sobre interpretación de cartas natales", precio: 70000 },
];



const agregarAlCarrito = (i) => {
  carrito.push(opciones[parseInt(i) - 1]);
};

let opcion;
do {
  opcion = prompt(
    "Bienvenido/a a nuestro portal de Astrología: Puede eligir las siguientes opciones: \n 1) Lectura Carta natal \n 2) Curso de astrología humanística n\n 3) Curso sobre interpretación de cartas natales \n 4) Ver carrito \n 5) Salir"
  );

  switch (opcion) {
    case "1":
      agregarAlCarrito(opcion);
      break;
    case "2":
      agregarAlCarrito(opcion);
      break;
    case "3":
      agregarAlCarrito(opcion);
      break;
    case "4":
      console.log(carrito);

      break;
    case "5":
      alert("Gracias por visitarnos!");

      break;
    default:
      alert("Opción incorrecta...");
      break;
  }
} while (opcion != 5);




let nombre = "Beatriz";

function saludar (){
  console.log("Hola " + nombre); nombre = "";
}

saludar();

//includes permite saber si el el elemento que recibo por parametro existe o no dentro de un array 

console.log (opciones.includes("marte"));

//objetos 

let fechas = {
Fechas:['Lectura de carta natal 16/2/2026',
'Curso de astrología humanística 17/02/20206',
'Interpretación de cartas natales 18/02/2026', Hora='18hs']

};

console.log(fechas);

//for each 

opciones.forEach((opciones)=>{console.log(opciones.nombre.toUpperCase());

})

//find

let opcionesencontrado = opciones.find((opciones)=> opciones.id == 2);

console.log(opcionesencontrado); 

//filter

let opcionesencontrados = opciones.filter((opciones)=> opciones.precio <=55000);

console.log (opcionesencontrados);

//storage



localStorage.setItem("clase", "lectura carta natal"); 
localStorage.setItem ("precio", 45000); 
localStorage.setItem("online", true);


let clase = localStorage.getItem("clase"); 
let precio = localStorage.getItem("precio");
let online = localStorage.getItem("online");

console.log (clase);
console.log (precio); 
console.log (online);

sessionStorage.setItem("clase", "lectura carta natal"); 
sessionStorage.setItem("precio", 45000); 
sessionStorage.setItem("online", true);

//
let curso = {id: 1, nombre: "Lectura Carta natal", precio: 45000 }; 

console.log (curso);
console.log (JSON.stringify(curso));

let elH1 = document.getElementById('h1');
console.log (elH1);


let inicio = document.getElementsByClassName("#");

console.log(inicio);

let ul = document.getElementsByTagName("ul");

console.log(ul);

let nav = document.getElementsByTagName("nav");

console.log(nav);



/*const clases = ['Lectura Carta natal','Curso de astrología humanística','Curso sobre interpretación de cartas natales'
]


const cargarDOM = ()=>{
  let h1 = document.getElementById('titulo')
  let ul = document.getElementById('listado')

    
h1.innerText = "www.astrología.com";

clases.forEach((clases) => {
    let li = document.createElement("li");
        li.innerText = `clases: ${clases}`;
    ul.appendChild(li);
  });
  };

  cargarDOM();
*/

  
const clases1 = [
  { id: 1, nombre: "Lectura Carta natal", precio: 45000 },
  { id: 2, nombre: "Curso de astrología humanística", precio: 45000 },
  { id: 3, nombre: "Curso sobre interpretación de cartas natales", precio: 70000 },
];
const cargarDOM = () => {
  let contenedor = document.getElementById("contenedor");

  clases1.forEach((clases1) => {
    let div = document.createElement("div");
    div.className = "border";
      div.innerHTML = `
          <h3>Id: ${clases1.id}</h3>
          <h2>Nombre: ${clases1.nombre}</h2>
          <span>Precio: $${clases1.precio}</span>
      `;
      contenedor.appendChild(div);
    });
  };

  cargarDOM();

  let div = document.querySelector("#hijo1");

    //fetch

    
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
      .then((data) => console.log(data))

      //async-await
        const llamadaServerExterno = async () => {
        let resultado = await fetch("https://jsonplaceholder.typicode.com/todos/1");
let data = await resultado.json();
    console.log(data);
  };
  llamadaServerExterno()
  
  const llamadaArchivoInterno = async () => {
  let resultado = await fetch("prods.json");
  let data = await resultado.json();
  console.log(data);
};

llamadaArchivoInterno();







