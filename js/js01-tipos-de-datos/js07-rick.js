// RickAndMortty


const insertarTarjetas = ( users) =>{
    const cards = users.map(  user => `
     <div class="col-lg-4 col-md-6 col-sm-10">
        <div class="card m-2">
        <img src="${user.image}" class="card-img-top" alt="...">
            <div class="card-body">
               ${user.name}
            </div>
        </div>                
    </div>
        ` );
    return cards.join("");
}

const buttonSection = document.getElementById("arreglo-botones");

const getPersonas = ( url ) =>{
    fetch( url )
        .then( (resolve)=> resolve.json() ) 
        .then( (data)=> {            
            console.log( data.results );            
            buttonSection.innerHTML =  insertarTarjetas( data.results );
        } )           
        .catch( (error)=> console.log(error)  );
};

getPersonas( "https://rickandmortyapi.com/api/character");