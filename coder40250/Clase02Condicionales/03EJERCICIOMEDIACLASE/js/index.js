/*
   Pedir al usuario: 
   2 números 
   Una operación ("SUMA", "MUL")

   Y mostrar el resultado 

   && AND
   || OR


   
*/

let num1 = Number(prompt("Ingrese 1er numero")) /*3le pido el primer numero para que haga la operacion */
let num2 = Number(prompt("Ingrese 2do numero")) /*le pido que ingrese el segundo numero para hacer la operacion entre si*/
let operacion = prompt("Ingrese SUM o MUL") .toUpperCase()/*le pido que ingrese la operacion a realizar */
 
if (isNaN(num1) || isNan (num2)) { /*que si ambos numeros son string o alguno de ellos va aser invalido */
   alert("Numero invalido")
}
/*empiezo las operaciones matematicas una vez se le pide al usuario los dos numeros */
else if(operacion == 'SUM')
{
   alert(`resultado de: ${num1+num2}`) /*para unir string con numeros */ 
}
else if (operacion == 'MUL')
{
   alert(`resultado de: ${num1*num2}`)
}
else {
   alert("OPERACION NO VALIDA")
}


/*
EJERCICIO DE LA CLASE //

let num1 = Number(prompt("Ingrese un numero"))
let num2 = Number(prompt("Ingrese otro numero"))
let operacion = prompt("Ingrese SUMA o MUL").toUpperCase()

if(isNaN(num1) || isNaN(num2))
{
   alert("Números inválidos")
}
else if(operacion === 'SUMA')
{
   alert(`LA SUMA ES: ${num1+num2}`)
}
else if(operacion === 'MUL')
{
   alert(`LA MUL ES: ${num1*num2}`)
}
else 
{
   alert("Operación NO VÁLIDA")
}
*/