const Nodo = require('./Nodo');
const Queue = require('./Queue');

var filaPersonas = new Queue(); //nueva fila

const persona1 = new Nodo("Juana"); //next = null
const persona2 = new Nodo("Elena");
const persona3 = new Nodo("Pedro");
const persona4 = new Nodo("Pablo");

filaPersonas.enqueue(persona1); //Nodo("Juana") valor="Juana" next=null
filaPersonas.enqueue(persona3);
filaPersonas.enqueue(persona2);
filaPersonas.enqueue(persona4);
filaPersonas.dequeue(); 
filaPersonas.imprimeFila(); 
