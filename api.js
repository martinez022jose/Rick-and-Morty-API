
const listaDePersonajes= document.getElementById('listaDeHeroes');
const url = 'https://rickandmortyapi.com/api/character';
const personajes = [];
const buscador = document.getElementById('buscador');
const btnBuscar = document.getElementById('btnBuscar')


const render = ()=>{
    fetch(url, {
        method:'GET',
    })
    .then(response => response.json())
    .then((data)=>{
        data.results.forEach(personaje => {
            listaDePersonajes.innerHTML += `<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12 mb-4">
            <div class="card"  style="width: 18rem;">
                <div class="personaje">
                    <img class="card-img-top person-img" style="max-height=8rem" src=${personaje.image} alt="Card image cap">
                        <div class="desc p-4">
                                <h5  class="card-text text-warning">Name: ${personaje.name}</h5>
                                <p  class="card-text">Species: ${personaje.species}</p>
                                <p class="card-text">Status: ${personaje.status}</p>
                                <p class="card-text">Gender: ${personaje.gender}</p>
                        </div>
                </div>
                
                <div class="card-body border border-light" style="background: #ededed;">
                    <h5 class="card-title text-center">${personaje.name}</h5>
                </div>
                
            </div>
            </div>`
            personajes.push(personaje);
        });
    }
    )
   
}

render(); 

const getPersonaje = ()=>{
    listaDePersonajes.innerHTML = '';
    const elementoABuscar = buscador.value.toLowerCase();
    personajes.forEach((personaje)=>{
        if(personaje.name.toLowerCase().indexOf(elementoABuscar)!=-1){
            listaDePersonajes.innerHTML += `<div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-6 mb-4">
            <div class="card"  style="width: 18rem;">
                <div class="personaje">
                    <img class="card-img-top person-img" style="max-height=8rem" src=${personaje.image} alt="Card image cap">
                        <div class="desc p-4">
                                <h5  class="card-text text-warning">Name: ${personaje.name}</h5>
                                <p  class="card-text">Species: ${personaje.species}</p>
                                <p class="card-text">Status: ${personaje.status}</p>
                                <p class="card-text">Gender: ${personaje.gender}</p>
                                
                        </div>
                </div>
                
                <div class="card-body border border-light" style="background: #ededed;">
                    <h5 class="card-title text-center">${personaje.name}</h5>
                </div>
                
            </div>
        
            </div>`
        }    
    })
}

btnBuscar.addEventListener('click', ()=>{
    getPersonaje();
    buscador.value = '';
    listaDePersonajes.innerHTML += '<div class="alert alert-danger">Personaje no encontrado</div>';
});

buscador.addEventListener('keyup', getPersonaje);












