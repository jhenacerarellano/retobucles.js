// imprime los numeros del 1 al 5
for (let i=1; i<=5; i++){
    console.log(i);
}
console.log("---------------------------------------")
// recorre una lista de colores
let lista = ["amarillo", "azul", "rojo", "blanco", "negro"];
let color= 0;
for (let color= 0; color<lista.length; color++){
    console.log(lista[color]);
}
console.log("---------------------------------------")
// recorre las propiedades de un objeto persona
let objeto= {
    nombre : " jhenacer",
    edad : " 26",
    profesión : " ingeniero industrial"
};
for (let etiqueta in objeto){
    console.log(etiqueta + objeto[etiqueta]);
}
console.log("---------------------------------------")
// el numero mas cercano al cuadrado de 100
let numero= 1;
 while (Math.pow(numero,2) <=100){
    numero++;
 }
 numero--;
 console.log("el numero mas cercano al cuadrado de 100 es: " + numero);
 console.log("---------------------------------------")
//  imprime numero pares hasta el 10 imprimiendo al menos uno
let num=1;
do{
    if(num % 2===0){
      console.log(num);
    }num++;
    
} while(num<=  10);

