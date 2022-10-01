function loaspk(){
    let url = 'https://pokeapi.co/api/v2/pokemon/25'
    fetch(url)
    
    .then((response) =>{
         return response.json();
        
    })

    .then((data) => {
        // o q faremos com o formato json
        console.clear();
        console.log(data);
        document.getElementById('nome').innerHTML = data['name'];
        document.getElementById('numero').innerHTML = data['id'];
        let img = data['sprites']['front_default'];
        document.getElementById('pic').setAttribute('src', img);
    })
    .catch((erro) => {
        console.log('Erro:' + erro);
    });
}


document.getElementById('btn1').onclick = loaspk;
