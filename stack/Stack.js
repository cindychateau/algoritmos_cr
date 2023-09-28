const Nodo = require('./Nodo');

module.exports = class Stack {
    constructor() {
        this.top = null;
    }

    /* Ingresar un nuevo nodo a la pila
    top = null
    nuevoNodo = Nodo("Clip") -> next = null
    Clip.next = null
    top = Clip
    ----
    nuevoNodo = Nodo("Lapiz") -> next = null
    Lapiz.next = Clip
    top = Lapiz
    ----
    nuevoNodo = Nodo("Libreta") -> next = null
    Libreta.next = Lapiz
    top = Libreta
    */
    push(nuevoNodo) {
        nuevoNodo.next = this.top;
        this.top = nuevoNodo;
    }

    /* Eliminamos el nodo que tenemos en top
    top = Libreta
    Libreta.next = Lapiz
    Lapiz.next = Clip
    Clip.next = null
    nodoEliminar = Libreta
    top = Libreta.next = Lapiz
    Libreta.next = null
    --
    nodoEliminar = Lapiz
    top = Lapiz.next = Clip
    Lapiz.next = null
    */
    pop() {
        let nodoEliminar = this.top;
        if(nodoEliminar) { //Si el nodoEliminar es distinto a null
            this.top = nodoEliminar.next;
            nodoEliminar.next = null;
        }
    }
    /*
    top = Libreta
    Libreta.next = Lapiz
    Lapiz.next = Clip
    Clip.next = null

    aux = Libreta
    IMPRIMIR Libreta
    aux = Libreta.next = Lapiz

    IMPRIMIR Lapiz
    aux = Lapiz.next = Clip

    IMPRIMIR Clip
    aux = Clip.next = null
    */
    imprimePila() {
        let aux = this.top;
        while(aux) {
            console.log(aux.valor);
            aux = aux.next;
        }
    }

}