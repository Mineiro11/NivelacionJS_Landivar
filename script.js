//1
let nombre = prompt("ingrese su nombre")
console.log(`Hola ${nombre}, un gusto`)
//2
let Num1 = prompt("ingrese un numero")
let Num2 = prompt("ingrese otro numero")
if(Num1 || Num2 == ""){
    console.log("algun de los dos numeros es nulo")
}
else{
    console.log("el resultado de la suma es de " + (Num1 + Num2))
    console.log("el resultado de la resta es de " + (Num1 - Num2))
    console.log("el resultado de la multiplicion es de " + (Num1 * Num2))
    console.log("el resultado de la division es de " + (Num1 / Num2))
}
//3
let numero= prompt("ingrese un numero")
if (numero%2==0){
    console.log(" el numero es par")
}else{
    console.log(" el numero es impar")
}
//4
let palabra=prompt("ingrese una palabra")
console.log("la palabra tiene " + palabra.length + " caracteres")
//5
let frase = prompt("ingrese una frase")
let fraserep = prompt("ingrse cuantas veces quiere que se repita la frase")
if(fraserep<=0){

}else{
    for (i=0; i<fraserep;i++){console.log(frase)}
}
//6
let numeromult=prompt("ingrese un numero")
for (i=0;i<=10;i++){console.log(numeromult +" multiplicado por " + i + " es igual a " + (numeromult * i))}
//7
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function adivinarNumero() {
    let intento = parseInt(prompt("Adivina el numero entre 1 y 10"));

 
    if (intento=="") {
        console.log("ingrese un numero válido");
        adivinarNumero(); 
    } else if (intento < numeroAleatorio) {
        console.log("el numero es mayor");
        adivinarNumero(); 
    } else if (intento > numeroAleatorio) {
        console.log("el numero es menor");
        adivinarNumero(); 
    } else {
        console.log("Adivinaste el numero " + numeroAleatorio);
    }
}
//8
let palabraVocales = prompt("ingrese una palabra:");

function contarVocales(palabraVocales) {
    let contador = 0;
    
    palabraVocales = palabraVocales.toLowerCase();

    
    for (let i = 0; i < palabraVocales.length; i++) {
        
        if (['a', 'e', 'i', 'o', 'u'].includes(palabraVocales[i])) {
            contador++;
        }
    }

    return contador;
}

let cantidadVocales = contarVocales(palabraVocales);
console.log("La palabra " + palabraVocales + " tiene " + cantidadVocales + " de vocales" );
//9
let texto = prompt("ingrese una cadena de texto:");
let textoInvertido = texto.split('').reverse().join('');
console.log("La cadena invertida es: " + textoInvertido);
//10
let palabra10 = prompt("Introduce una palabra:");


function esPalindromo(palabra10) {

    let palabraLimpia = palabra10.toLowerCase();
    let palabraInvertida = palabraLimpia.split('').reverse().join('');
    return palabraLimpia === palabraInvertida;
}

if (esPalindromo(palabra10)) {
    console.log("La palabra " + palabra + " es un palíndromo");
} else {
    console.log("La palabra " + palabra + " no es un palíndromo");
}