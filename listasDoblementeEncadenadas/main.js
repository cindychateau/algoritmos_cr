const Nodo = require('./Nodo');
const LDE = require ('./LDE');

let listaPersonas = new LDE();

const persona1 = new Nodo("Juana");
const persona2 = new Nodo("Elena");
const persona3 = new Nodo("Pedro");
const persona4 = new Nodo("Pablo");

listaPersonas.insertaNodo(persona1);
listaPersonas.insertaNodo(persona2);
listaPersonas.insertaNodo(persona3);
listaPersonas.insertaNodo(persona4);

listaPersonas.imprimeLista();

listaPersonas.borrarNodo("Elena");