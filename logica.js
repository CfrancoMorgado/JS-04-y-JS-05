let username = prompt("Por favor introduce tu nombre de usuario")
let age = prompt("Por favor introduce tu edad")
let film = prompt("introduce tu pelicula favorita")

console.log(`Hi, my name is ${username}, i´am ${age} years old. Btw, the film ${film} is one of my favorites`)


function Informacion(username, age,film){
    
    console.log(`Hi, my name is ${username}, i´am ${age} years old. Btw, the film ${film} is one of my favorites`)
}

Informacion("César", 29, "El camino hacia el Dorado")
// Informacion((prompt"introduce tu username"), prompt"Introduce tu edad", prompt"introduce tu pelicula favorita")

//
function highestNumber(){
    let numeros = [];
    for(let i = 0; i < 10; i ++){
    let numbers = +prompt("Introduce un numero");
    numeros.push(numbers)
    }
    let masAlto = Math.max(...numeros)
    console.log(masAlto)

}


  highestNumber()



  //Palindromo

  function palindromo() {
    
    let fraseOPalabra = prompt("Escribe una frase o palabra que creas que es un palindromo:");

    
    let standar = fraseOPalabra.toLowerCase().replace(/[^a-z0-9]/g, '');

   
    let palabraReversa = standar.split('').reverse().join('');

    
    if (standar === palabraReversa) {
        console.log("Sí, es un palindromo");
    } else {
        console.log("No es un palindromo");
    }
}

palindromo();
