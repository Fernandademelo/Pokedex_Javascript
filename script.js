function loaspk(){
    let url = 'https://pokeapi.co/api/v2/pokemon/1'
    fetch(url)
    
    .then((responde) =>{
         return Response.json();
        
    }
    )
    
    
    .then((data) => {
        // o q faremos com o formato json


    })
    .catch((erro) => {
        console.log('Erro:' + erro);
    })


console.clear();
console.log("Funciona")

}

document.getElementById('btn1').onclick = loaspk;
