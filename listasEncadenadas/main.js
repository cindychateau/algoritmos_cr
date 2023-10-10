const Nodo = require('./Nodo');
const ListaEncadenada = require('./ListaEncadenada');

let listaPersonas = new ListaEncadenada();

const nodo1 = new Nodo("Elena");
const nodo2 = new Nodo("Juana");
const nodo3 = new Nodo("Pedro");
const nodo4 = new Nodo("Pablo");

listaPersonas.insertaNodo(nodo3);
listaPersonas.insertaNodo(nodo2);
listaPersonas.insertaNodo(nodo1);
listaPersonas.insertaNodo(nodo4);

listaPersonas.imprimeLista();

listaPersonas.borrarNodo("Juana");

console.log("------");

listaPersonas.imprimeLista();


