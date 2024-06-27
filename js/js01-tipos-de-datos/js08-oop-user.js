
const pensamientoMariana = "Quiero comer una galleta chips Ahoy";
const pensamientoArlette = "Se me antojan unos hotcakes";
const miPensamiento = "Pensé en la sesión de hoy";

const myFunctionRubi = ()=> console.log("Rubí piensa que quiere dormir");

//Definicion de un objeto
//"this" palabra reservada de java script para no afectar si renonbramos el objeto
const berryDetails = {
    nombre: "mora",
    color: "cafe",
    talla: "mediana",
    ladrar: function(){
        return `${this.nombre} esta ladrando`; // Acceder a los detalles del objeto
    },
    cortePelo: function(){
        return`${this.nombre} le estan cortando su pelo color ${this.color}`;

    }
    
};

const tigerDetails = {
    nombre: "Tiger",
    color: "atigrado",
    talla: "grande",
    ladrar: function(){
        return `${this.nombre} esta ladrando`; // Acceder a los detalles del objeto
    },
    cortePelo: function(){
        return`${this.nombre} le estan cortando su pelo color ${this.color}`;

    }
    
};




//por convencion export siempre al final
export { pensamientoMariana, miPensamiento, myFunctionRubi, berryDetails as detallesMora};