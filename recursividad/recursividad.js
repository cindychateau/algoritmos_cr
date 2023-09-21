/*
Recursividad: una función que se llama a sí misma
Programación Dinámica: dividir problemas grandes en problemas más pequeños y fáciles de solucionar
DIVIDE Y VENCERAS
------
1.- Caso base: una condicional que se debe de cumplir y que de inmediato me regrese algo a cambio
2.- Cómo vamos a avanzar
3.- Volvemos a llamar la función
*/

function cuentaRegresiva(num) {
    if(num == 0) {
        return;
    } else {
        console.log(num);
        num--;
        cuentaRegresiva(num);
    }
}

//cuentaRegresiva(10); // 10 9 8 7 ..... 1 ---- 0 X

/*
RETO 1: SIGMA
Recibir un número y queremos sumar todos los anteriores
sigma(5) - 5+4+3+2+1 = 15

sigma(4)
num = 4
RETURN 4 + sigma(3) -> 4 + 6 = 10

sigma(3)
num = 3
RETURN 3 + sigma(2) -> 3 + 3 = 6

sigma(2)
num = 2
RETURN 2 + sigma(1) -> 2 + 1 = 3

sigma(1)
num = 1
RETURN 1
*/
function sigma(num) {
    if(num === 1) {
        return 1;
    } else {
        return num + sigma(num-1);
    }
}

//console.log(sigma(4));

/*
RETO 2: FACTORIAL
Recibir un  número y regresa la multiplicación de los anteriores
factorial(4) - 4*3*2*1 = 24

factorial(4)
num = 4
RETURN 4 * factorial(3) -> 4*6 = 24

factorial(3)
num = 3
RETURN 3 * factorial(2) -> 3*2 = 6

factorial(2)
num = 2
RETURN 2 * factorial(1) -> 2*1 = 2

factorial(1)
num = 1
RETURN 1
*/
function factorial(num) {
    if(num === 1) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

//console.log(factorial(4));

/*
RETO 3: FIBONACCI
Recibir un número y regresa el número el la serie de fibonacci que está en esa posición
Serie: 0 1 1 2 3 5 8 13 21 34 55 89 .....
fibonacci(5) - 3

fibonacci(5)
posicion = 5
RETURN fibonacci(4) + fibonacci(3) -> 2 + 1 = 3

fibonacci(4)
posicion = 4
RETURN fibonacci(3) + fibonacci(2) -> 1 + 1 = 2

fibonacci(3)
posicion = 3
return fibonacci(2) + fibonacci(1) -> 1 + 0 = 1

fibonacci(2)
posicion = 2
RETURN 1;

fibonacci(1)
posicion = 1
RETURN 0
*/
function fibonacci(posicion) {
    if(posicion === 1) {
        return 0;
    } else if(posicion === 2) {
        return 1;
    } else {
        return fibonacci(posicion -1) + fibonacci(posicion-2);
    }
}

console.log(fibonacci(5));
