//estructura de una variable

//let nombreDeLaVariable = valor;

let NumeroUno = 1

console.log(NumeroUno); 

//operaciones aritmeticas

let NumeroTres = 10
let numeroDos = 19

let suma = NumeroTres + numeroDos
console.log(suma);

let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")

console.log(nombre)
console.log (apellido)  

let NombreCompleto = nombre + " " + apellido

console.log("bienvenido señor/a " + NombreCompleto)

let variable1 = 2;
let variable2 = "2";

if(variable1 == variable2){
    console.log("son lo mismo para este operador")
}

let numero = prompt("ingresa tu numero")

if(numero > 2){
    console.log("numero positivo")
}else if(numero < 2){
    console.log("numero negativo")
}else{
    console.log("numero igual")
}


const EDAD = prompt("ingresa tu edad")

if(EDAD >= 18){
    console.log("podes manejar papichulo")
}else{
    console.log("que haces aca papichulo?")
}


/*----------------------------------------------------------*/


let nombreDeUsuario = prompt("ingrese nombre de usuario");
let password = prompt("ingresa contraseña")

if(nombreDeUsuario === "admin" && (password === "secreta" || password === "123456")){
    console.log("puede acceder")
}else{
    console.log("hay un error, porfavor vuelve a escribir la contraseña")
}


/*-----------------------------------------------------------*/


for(let i= 0; i < 21; i++){
    console.log("inteacion Nro", i)
}

for(veronica = 1; veronica <=10; veronica++){


    if( veronica === 8){
        break
    }
console.log(veronica)
}

/*------------------------------------------------------------*/

let silla = {

patas: 5,
color: negro,
madera: pino
};

const personal={

domicilio: "",
region: "",
pais: ""
}

personal.domicilio = "calle falsa 123"
personal.region = "pirulingui"
personal.pais = "pirlonga"

console.log(personal);

/*------------------------------------------*/ 


let ropa = {
marca: "nike",
talla: "L",
ropaDestacable: function(){
     console.log("ropa especialmente elegida para vos")
}
}