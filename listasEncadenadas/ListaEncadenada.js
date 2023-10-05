const Nodo = require('./Nodo')

module.exports = class ListaEncadenada {

    constructor() {
        this.head = null;
    }
    /*
    head = null
    nuevoNodo = Elena
    head = Elena next = null
    ---
    nuevoNodo = Pedro
    aux = Elena
    Elena.next = Pedro next null
    ---
    nuevoNodo = Juana
    aux = Elena
    aux = Pedro
    Pedro.next = Juana next null
    ---
    nuevoNodo = Pablo
    aux = Elena
    aux = Elena.next = Pedro
    aux = Pedro.next = Juana
    Juana.next = Pablo
     */
    insertaNodo(nuevoNodo) {
        //Verificar si es el primer nodo en la lista.
        //nuevoNodo sería el head de mi lista
        if(!this.head) { //this.head == null
            this.head = nuevoNodo;
        } 

        //ELSE
        //Buscar el último nodo de la lista (next null) y ahí colocar el nuevo Nodo
        //elemento que tenía next null ahora tendrá next nuevoNodo
        else {
            let aux = this.head;
            while(aux.next) { //aux.next != null
                aux = aux.next
            }
            aux.next = nuevoNodo;
        }
    }

    /*
    this.head = Elena .next = Pedro
    Pedro .next = Juana
    Juana .next = Pablo
    Pablo .next = null
    ----
    aux = Elena
    IMPRIME Elena
    aux = Elena.next = Pedro
    IMPRIME Pedro
    aux = Pedro.next = Juana
    IMPRIME Juana
    aux = Juana.next = Pablo
    IMPRIME Pablo
    aux = Pablo.next = null
    */
    imprimeLista() {
        //Recorrer todos los nodos HASTA llegar a un null
        let aux = this.head;
        while(aux) { //aux != null
            console.log(aux.valor);
            aux = aux.next;
        }
    }

    borrarNodo(valorABorrar) {
        //Preguntamos si el valorABorrar es = al valor del nodo head
        //nodo head = nodo head viejo.next

        //Buscamos el nodo que tenemos con ese valor
        //El nodo PREVIO al nodo a eliminar va a tener como next el nodo next del valor a eliminar
    }

}