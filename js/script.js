// tres (3) constantes para referenciasr as ITENS div´s do projeto
const album = document.getElementById('album');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');//*


//tres (3) constantes para referenciasr os ID´S do Iframes
const videoAlbum = document.querySelector('#videoAlbum');
const videoCasamentos = document.querySelector('#videoCasamentos');
const videoBuffet = document.querySelector('#videoBuffet');

// evento do Click
album.addEventListener ('click', () => {
    album.classList.toggle('active');
    videoAlbum.classList.toggle('active');
});

casamentos.addEventListener ('click', () => {
    casamentos.classList.toggle('active');
    videoCasamentos.classList.toggle('active');
});

buffet.addEventListener ('click', () => {
    buffet.classList.toggle('active');
    videoBuffet.classList.toggle('active');
});



























