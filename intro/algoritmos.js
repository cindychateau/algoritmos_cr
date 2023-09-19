function hola(nombre) { /*nombre = "Elena" */
    return "Hola "+nombre;
}

console.log(hola("Elena"));

for(let i=0; i<10; i++){
    console.log(i);
}

palabra = "Elena";
console.log(palabra[1])

/*
RETO 1: Factorial
Recibimos un número y regresamos el factorial de este
Ej:
1! = 1*1 = 1
2! = 1*2 = 2
3! = 1*2*3 = 6
4! = 1*2*3*4 = 24
-----------
numero = 5
fact = 1
i = 1
fact = 1 * 1 = 1
i = 2
fact = 1 * 2 = 2
i = 3
fact = 2 * 3 = 6
i = 4
fact = 6 * 4 = 24
i = 5
fact = 24 * 5 = 120
i = 6
DETIENE BUCLE
RETURN 120
*/
function factorial(numero) {
    let fact = 1; //Resultado del factorial
    for(let i=1; i<=numero; i++) {
        fact *= i; // fact = fact * i;
    }
    return fact;
}

console.log(factorial(5));

/*
RETO 2: Fibonacci
Recibimos un número entero e imprimimos la serie de fibonacci en esa posición
Serie Fibonacci: Comenzando en 0 y 1 vamos sumando los dos últimos números
0 1 1 2 3 5 8 13 21 34 55 89
--------------
numero = 4
lista = [0, 1]
i = 2
siguiente = lista[1] + lista[0] = 1 + 0 = 1
lista = [0, 1, 1]
i = 3
siguiente = lista[2] + lista[1] = 1 + 1 = 2
lista = [0, 1, 1, 2]
i = 4
*/
function fibonacci(numero) {
    let lista = [0, 1]; 
    //Comenzamos en la pos 2
    for(let i=2; i<numero; i++) {
        let siguiente = lista[i-1] + lista[i-2];
        lista.push(siguiente);
    }
    console.log(lista);
}
fibonacci(4)
/*
RETO 3: Palíndromo
Recibimos una palabra y nos regresa true o false si la palabra es palíndoma
Ejemplo: oso, salas, seres, radar
palabra = salas
inicio = 0
final = 4
palabra[0] != palabra[4] -> s != s
inicio = 1
final = 3
palabra[1] != palabra[3] -> a != a
inicio = 2
final = 2
palabra[2] != palabra[2] -> l
inicio = 3
final = 1
--------------
palabra = arma
inicio = 0
final = 3
palabra[0] != palabra[3] -> a != a
inicio = 1
final = 2
palabra[1] != palabra[2] -> r != m
*/
function palindromo(palabra) {
    let inicio = 0;
    let final = palabra.length -1; //la posición final
    
    while(inicio < palabra.length/2) { //Detenerme en medio
        if(palabra[inicio] != palabra[final]) {
            return false;
        } else {
            inicio++;
            final--;
        }
    }

    return true;
}

console.log(palindromo("radar"));