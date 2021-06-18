// Algoritmo “Adiviná el número”
// 1 - Elegir y guardar un número al azar (entre 1 y 100) 
// 2 - Pedirle al usuario que ingrese un número 
// 3 - Sumar uno en cantidad de intentos 
// 4 - Si el número ingresado es igual al pensado 
// 	Informar “Ganaste” y Terminar 
// Si el número ingresado es mayor al pensado
// 	Informar “Es mayor”
// Si el número ingresado es menor al pensado
// 	Informar “Es menor”
// 5 - Volver al paso 2 

// Terminar:
// 1 - Informar: Ganaste! Cantidad de intentos: XX

// Extra: Guardar todos los intentos, verificar el ingreso para que el usuario no repita un número.
// Extra 2: Mostrar en pantalla los números ingresados.


//asignamos a la variable numero un numero randon 
let numeroRandom = Math.round(Math.random()*100);

//declaro varible e inicializo para un contador de veces
let intentos = 0;
//declaro varible
let numeroUsuario;
let repetido=[];
// codigo
do {
   
    numeroUsuario = parseInt(prompt("¿Por favor ingrese un numero entre 1 y 100?"));
    for (let i = 0; i <repetido.length; i++) {
        if(numeroUsuario===repetido[i]){
            alert(`Numero ya ingresado`)
        }
        
    }  
    repetido.push(numeroUsuario)
   
   
    if (numeroUsuario === numeroRandom) {
        alert(`Ganaste Felicidades!!!! el numero random elegido por la maquina era el ${numeroUsuario}`)
    } else {
        if (numeroUsuario < numeroRandom) {
            alert("Es mayor")
        } else {
            alert("Es Menor")
        }
    }
    intentos++;
} while (numeroUsuario != numeroRandom);

console.log(`La cantidad de veces que tuviste que ingresar  un numero para acertar fueron ${intentos} veces`);
alert(`La cantidad de veces que tuviste que ingresar  un numero para acertar fueron ${intentos} veces`);