window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //EVENTOS
    titulo.addEventListener('mouseover', function () {
        titulo.style.color = '#0833a2'
    })

    let imputTitulo = document.querySelector('#titulo')
    let estadoSecreto = 0;
    imputTitulo.addEventListener('keyup', function (e) {
        
        if (e.key == 's') {
            estadoSecreto = 1            
        } else if (e.key == 'e' && estadoSecreto == 1) {
            estadoSecreto = 2
        } else if (e.key == 'c' && estadoSecreto == 2) {
            estadoSecreto = 3
        } else if (e.key == 'r' && estadoSecreto == 3) {
            estadoSecreto = 4
        } else if (e.key == 'e' && estadoSecreto == 4) {
            estadoSecreto = 5
        } else if (e.key == 't' && estadoSecreto == 5) {
            estadoSecreto = 6
        } else if (e.key == 'o' && estadoSecreto == 6) {
            estadoSecreto = 0
            alert('SECRETO MÁGICO')            
        } else {
            estadoSecreto = 0
        }        
    })
}