/*Hacer un programa, donde el usuario ingrese
su edad, tomando en cuenta esta se debera realizar el
el programa o secuencia de codigo. 
-las codiciones son: que no se ingresen "Strings", 
numero menores a 1; numeros mayores a 110
-sino: el usuario tiene entre 1 y 12 "no puede 
entrar al bar"
-sino: el usuario tiene entre 12 y 18 "puede tomar
trago pero sin alcohol"
-si pasa por todas estas condiciones y no cumple
ninguna va directo al "puede tomar trago con 
alcohol"*/


let edad = prompt ("Ingrese su edad");

if (edad <1  || edad>110  || isNaN(edad))   /*aca declare que si el usuario tiene una edad= menor, mayor o string "el dato sera errroneo" */
{
   alert("Datos erroneos");
}
else if ( edad>=1 && edad <=12)
{
   alert("no puede beber ni ingresar al bar") /*digo que el usuario no entra ni toma porque es manor de edad*/
}

else if( edad>=12 && edad <=18)
{
   alert("Puede tomar trago pero sin alcohol")
}
else (edad >=18)
{
   alert("Bienvenido puede pedir fernet") /*aca declaro que todas las condiciones anteriores no se cumplen, finalemente le usuario"puede beber alcohol"*/ 
}

/*
DE LA CLASE!!!!
let edad = Number(prompt("Ingrese su edad"));

if (isNaN(edad) || edad<1 || edad>110) 
{
   alert("Su edad no es válida")
}
else if(edad>=1 && edad<=12)
{
   alert("No puede beber en nuestro bar")
}
else if(edad>12 && edad<=18)
{
   alert("Puede beber cocktail sin licor")
}
else {
   alert("Puede beber cocktail con licor")
} 
*/

