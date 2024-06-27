//creacion de plantilla
//empezamos de lo general
/*
el nombre de las clases debe ser con UpperCamelCase.
Se recomienda que el nombre sea un sustantivo.en singular

 * Una clase es una plantilla(molde) que servirá para crear objetos.
 * En la clase se definirán propiedades y métodos que los objetos
 * creados a partir de la clase compartirán.
 * 
 * Las clases permiten agrupar datos y comportamientos relacionados
 * en una única estructura, lo que facilita la organización y
 * reutilización del código
*/
class Comestible {

    #fechaCreacion; //encapsulamiento

    //El método constructor nos ayuda a inicializar los atriburtos del objeto
    constructor(nombreEntrada = "Comestible", sabor = "neutro"){
        this.nombre = nombreEntrada;
        this.sabor = sabor; // creacion de atributos
        this.#fechaCreacion = new Date();
        console.log(`Soy ${this.nombre} y Tengo vida(-.-), mi sabor es ${this.sabor}`);

    }
    mostrarCaducidad(){
        const calcularCaducidad =  this.#fechaCreacion.getTime() + 3_600_000;
        const caducidad = new Date(calcularCaducidad );
        return `Soy ${this.nombre}, caduco el ${ caducidad.toLocaleString() }`;
    }

    //metodos setter y getters
    //leer atributos de elementos encapsulados
    get fechaCreacion (){
        return this.#fechaCreacion;
    }

    set fechaCreacion (newValue){
        this.#fechaCreacion  = newValue;
    }


}
    
    /**
 * Herencia: mecanismo que permite a un objeto basarse en otro 
 * objeto existente para heredar propiedades y métodos. 
 * Esto permite la reutilización de código y la creación 
 * de relaciones entre objetos, lo que facilita la 
 * organización y la estructura del código.
 * 
 * Para heredar en la declaración de la clase se usa la palabra extends
 */

//clase child y clase parent

class Enlatado extends Comestible {
    constructor( name, gramaje ){
        // Accede al constructor de la clase parent
        super( name );
        this.gramaje = gramaje;    
    }
}


export{Comestible, Enlatado};


