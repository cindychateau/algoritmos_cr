const Nodo = require('./Nodo');

module.exports = class LDE {

    constructor() {
        this.head = null;
    }


    insertaNodo(nuevoNodo) {
        if(!this.head) { //this.head == null
            this.head = nuevoNodo;
        } else {
            let nodoActual = this.head;
            while(nodoActual.next) { //el siguiente sea diferente a nulo
                nodoActual = nodoActual.next;
            }
            //Del último elemento de mi lista, el siguiente es el nuevoNodo
            nodoActual.next = nuevoNodo;
            nuevoNodo.before = nodoActual;
        }
    }

    imprimeLista() {
        let aux = this.head;
        while(aux) { //aux != null
            console.log(aux.valor);
            aux = aux.next;
        }
    }
    /*
    valorABorrar = Pedro
    nodoActual = Elena
    nodoActual = Pedro
    nodoAnterior = Elena
    nodoSiguiente = Pablo
    Elena.next = Pablo
    Pablo.before = Elena
    Pedro.before = null
    Pedro.next = null
     */
    borrarNodo(valorABorrar) {
        let nodoActual = this.head;
        while(nodoActual) { //nodoActual sea diferente a nulo
            if(nodoActual.valor === valorABorrar) {
                let nodoAnterior = nodoActual.before;
                let nodoSiguiente = nodoActual.next;
                nodoAnterior.next = nodoSiguiente;
                nodoSiguiente.before = nodoAnterior;

                nodoActual.before = null;
                nodoActual.next = null;
            }
            nodoActual = nodoActual.next;
        }
    }

}