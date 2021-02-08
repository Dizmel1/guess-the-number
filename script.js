let attempts=3;
let isFlippedCard=false;
let firstCard,secondCard;
const cards=document.querySelectorAll(".card");
[...cards].forEach(card=>{
    let randomCard = Math.floor(Math.random()*12);
    card.style.order=randomCard
});

function flipCard(){
    //setTimeout(disableAll(),10000);
    let item=event.target.parentElement;   
    if (event.target.parentElement===firstCard)return firstCard;   
    item.classList.add("flip");
    if(!isFlippedCard){
    isFlippedCard=true;
    firstCard=event.target.parentElement;
    return
    }
    secondCard=event.target.parentElement; 
    firstCard.dataset.education===secondCard.dataset.education?disableCards():(unflipCards(), attempts-=1);
    if (attempts==0){
        disableAll();
        alert('ты проиграл');
    }
}
function unflipCards(){    
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        alert('попыток: '+attempts);
        reset();
    },1000);
}
function reset(){
    isFlippedCard=false;    
    [firstCard,secondCard]=[null,null];
    }
function disableCards(){
    firstCard.removeEventListener("click",flipCard);
    secondCard.removeEventListener("click",flipCard);
    reset();
   }
function disableAll(){
    cards.forEach(card=>card.removeEventListener("click",flipCard));
}
cards.forEach(card=>card.addEventListener("click",flipCard));