// sumandoResistores(Resistores)

R1= +prompt("Introduce el valor del Resistor 1")
R2= +prompt("Introduce el valor del Resistor 2")
R3= +prompt("Introduce el valor del Resistor 3")
R4= +prompt("Introduce el valor del Resistor 4")
R5= +prompt("Introduce el valor del Resistor 5")
R6= +prompt("Introduce el valor del Resistor 6")



// let resistoresParaArray = (R1,R2,R3,R4,R5,R6)
Resistores = [R1,R2,R3,R4,R5,R6]


function sumandoResistores(Absolutos){
    return Absolutos.reduce((acc,num) => acc + Math.abs(num), 0);
}
console.log(`La suma de los Resistores [${Resistores}] es ${sumandoResistores(Resistores)}`)

/*
Hola Josue, traté de hacer la funcion como; function(...resistoresParaArray){
    return resistoresParaArray.reduce() ...
}
esto para transformar la variable resistoresParaArray en un Array, pero solo me guardaba el ultimo
valor qie ingresaba (por el prompt). Pongo esto como Notification, igual te pregunto en clase
*/


// Sociedad Secreta
function secretSociety(){
    let NumeroDeMiembros = +prompt("Cuantos miembros hay en esta sociedad secreta?")
    let miembros = []
    for (let i=0; i < NumeroDeMiembros; i++){
        let nombreMiembros = prompt(`Introduce el nombre del miembro #: ${i + 1}`);
        miembros.push(nombreMiembros)
    }
        
        let Iniciales = miembros.map(nombre => nombre[0].toLocaleUpperCase())
        
        Iniciales = Iniciales.join("")
        console.log(`El nombre de la sociedad secreta donde están ${miembros} es: ${Iniciales} `)
}
secretSociety()

//Multiplos

function Multiplos(number, length){
    let multiplos =[]
    for ( let i = 1; i <= length; i++){
        multiplos.push(number * i)
    }
    console.log(multiplos)
    return multiplos
    
}
let numero = +prompt("Introduce un numero")
let cantidadMultiplos = +prompt("cuantos multiplos de dicho numero necesitas?")

Multiplos(numero,cantidadMultiplos)
