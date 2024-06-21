console.log("js05-Objetos");

//un objeto es una coleccion de propiedades y metodos
// Los vaores de las propiedades pueden ser de cualquier tipo (incluso otros objetos)
//Una propiedad es una asociacion entre un nombre(key) y un valor(value).

const celularSerch = {
    propietario:"sergio",
    modelo:"iphone 30sultramax" , 
    numSerie : "A1266830",
    IMEI: "HTY89910",
    color: "blanco",
    memoriaRamGb : 1024,
    memoriaInternaGb: 3000,
    precio: 100000,
    pantallaInch: 22 

}
console.table(celularSerch);
//leer el IMEI del celular
console.log(celularSerch["IMEI"]);
console.log(celularSerch.IMEI);

//leer el atributo color
console.log(celularSerch.color);

//modificar el atributo precio a $35000 e imprimir
celularSerch.precio = 35000;
console.log(celularSerch.precio);

//Que realizarias para almacenar varios objetos de celulares?

const celulares = [  celularSerch  ];
celulares.push({
    propietario:"mariana",
    modelo:"iphone 12" , 
    numSerie : "A00981",
    IMEI: "HTY7777",
    color: "morado",
    memoriaRamGb : 16,
    memoriaInternaGb: 256,
    precio: 23000,
    pantallaInch: 12 
});



//agregar dos celulares mas
celulares.push({
    propietario:"cangrejo",
    modelo:"huawei p8 lite" , 
    numSerie : "A008978",
    IMEI: "HTY8888",
    color: "negro",
    memoriaRamGb : 8,
    memoriaInternaGb: 570,
    precio: 15000,
    pantallaInch: 8 
});
celulares.push({
    propietario:"minotauro",
    modelo:"moto g31" , 
    numSerie : "A00125698",
    IMEI: "HTY586996",
    color: "azul",
    memoriaRamGb : 4,
    memoriaInternaGb: 800,
    precio: 13000,
    pantallaInch: 10 
});
celulares.push( {  
    propietario: "Marbe",
    modelo: "W1000",
    numSerie: "A888321" ,
    IMEI: "NoLoRobe",
    color: "Azul",
    memoriaRamGb : 32,
    memoriaInternaGb: 128 ,
    precio: 15000,
    pantallaInch: 14, 
} );

console.log(celulares);

//mostrar la persona propietaria y el modelo de su celular
for (let i = 0; i < celulares.length; i++) {
    const element = celulares[i];
    console.log(element.propietario, element.modelo);
}

//Cartas en html para celulares

const arregloCartas = document.getElementById("arreglo-cartas");

const imprimirCartasDeCelulares = (number) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  };


const carta =(value) => imprimirCartasDeCelulares(value);

const crearCarta = ( number ) => {
    return `
        <div class="col-4 card"> 
            <div class="card-body">
                <h5 class="card-title">${number.modelo}</h5>
                <p class="card-text">${number.propietario}</p>
            </div>
        </div>`
}

const crearArregloCartas = ( celulares ) =>{
    let arregloFinalCartas = "";
    for(let i=0; i < celulares.length; i++){
        arregloFinalCartas = arregloFinalCartas + crearCarta(celulares[i]);
    }
    console.log(arregloFinalCartas);
    return arregloFinalCartas;
};
arregloCartas.innerHTML = crearArregloCartas (celulares);