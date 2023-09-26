const Nodo = require('./Nodo');

module.exports = class Queue {

    constructor() {
        this.head = null; //el primer nodo de la fila
        this.tail = null; //el última nodo de la fila
    }

    //Recibe un nodo y lo coloca al final de la fila
    /*
    nuevoNodo = Nodo("Elena") valor="Elena", next=null
    head = null
    head = Nodo("Elena")
    tail = Nodo("Elena")

    nuevoNodo = Nodo("Juana") valor="Juana", next=null
    ultimoNodo = Nodo("Elena")
    Elena.next = Nodo("Juana")
    tail = Nodo("Juana")

    nuevoNodo = Nodo("Pedro") valor="Pedro", next=null
    ultimoNodo = Nodo("Juana")
    Juana.next = Nodo("Pedro")
    tail = Nodo("Pedro")
    */
    enqueue(nuevoNodo) {
        if(!this.head) { //this.head == null
            this.head = nuevoNodo;
            this.tail = nuevoNodo;
        } else {
            let ultimoNodo = this.tail;
            ultimoNodo.next = nuevoNodo;
            this.tail = nuevoNodo;
        }
    }

    //Regresa el primer nodo de la fila y lo elimina de la fila
    /*
    head = Elena
    tail = Pedro
    Elena.next = Juana
    Juana.next = Pedro
    Pedro.next = null
    primerNodo = Nodo("Elena")
    head = Elena.next = Juana
    Elena.next = null

    primerNodo = Nodo("Juana")
    head = Juana.next = Pedro
    Juana.next = null

    head = null
    tail = null
    */
    dequeue() {
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let primerNodo = this.head;
            this.head = primerNodo.next; //El que le seguía en la fila al primer elemento
            primerNodo.next = null;
            return primerNodo
        }
    }
    
    //Recorra e imprima los valores de todos los nodos
    /*
    head = Elena
    tail = Pedro
    Elena.next = Juana
    Juana.next = Pedro
    Pedro.next = null

    aux = Elena
    IMPRIMO "Elena"
    aux = Elena.next = Juana

    IMPRIMO "Juana"
    aux = Juana.next = Pedro

    IMPRIMO "Pedro"
    aux = Pedro.next = null
     */
    imprimeFila() {
        let aux = this.head;
        while(aux) { //Siempre que aux sea diferente a null
            console.log(aux.valor);
            aux = aux.next;
        }
    }

}