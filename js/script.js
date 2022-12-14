//Creo array immagini
let games = [
    {
        img : "01.webp",
        titolo : "Spiderman Miles Morales",
        descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, odio soluta.",
    },
    {
        img : "02.webp",
        titolo : "Ratchet & Clank : Rift Apart",
        descrizione : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, odio soluta.",
    },
    {
        img : "03.webp",
        titolo : "Fortnite",
        descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, odio soluta.",
    },
    {
        img : "04.webp",
        titolo : "Stray",
        descrizione : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, odio soluta.",
    },
    {
        img : "05.webp",
        titolo : "Marvel Avengers",
        descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, odio soluta.",
    },
]

let itemsContent = '';
let game= '';

for(let i = 0; i < games.length; i++){
    let game = games[i] 
    itemsContent += `<div class="item">
        <img src="./img/${game.img}">
        <div class="testo" >
            <h2>${game.titolo}</h2>
            <h5>${game.descrizione}</h5>
        </div>
       
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');
let circleActive = 0;


circles[circleActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    
    items[itemActive].classList.remove('active')
        
    if(itemActive+1 === games.length){
        itemActive = 0
    } 

    else {
        itemActive++
    }
    
    items[itemActive].classList.add('active')

    circles[circleActive].classList.remove('active')

    if(circleActive+1 === games.length){
        circleActive = 0
    }
    
    else {
        circleActive++
    }
    
    circles[circleActive].classList.add('active')


});

prev.addEventListener('click', function(){
    
    items[itemActive].classList.remove('active')
        
    if(itemActive-1 === -1){
        itemActive = games.length -1
        
    } 

    else {
        itemActive--
    }
    
    items[itemActive].classList.add('active')

    circles[circleActive].classList.remove('active')

    if(circleActive-1 === -1){
        circleActive = games.length -1
    }
    
    else {
        circleActive--
    }
    
    circles[circleActive].classList.add('active')


})


