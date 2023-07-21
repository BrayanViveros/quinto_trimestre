const divtexto = document.querySelector('#texto'); //Referencia al id creado con #  
const usuario = prompt("ingresa tu nombre");
const   titulo = <h1>Bienvenido {usuario} al curso de React</h1>; 

ReactDOM.render(titulo, divtexto);
