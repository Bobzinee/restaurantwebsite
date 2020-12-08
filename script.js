const quotes = ["Nothing brings people together like good food", 
"Food is the ingredient that binds us together", 
"The secret ingredient is always love",
"Hard work should be rewarded by good food", 
"Good food is the foundation of genuine happiness",
"Count the memories, not the calories", 
"There is no sincere love than the love of food", 
"..because I don't want to look back & think \"I could have eaten that!\"", 
"I followed my heart and it led me to the fridge", 
"An apron is just a cape on backwards"];
let quote = quotes[Math.floor(Math.random() * quotes.length)];
const blockQuote = document.querySelector('blockquote');
blockQuote.innerText = quote;

//NavBar
const menu = document.querySelector(".menu-btn");
const list = document.querySelector(".nav-container");
let menuOpen = false;
menu.addEventListener('click', function(){
    if(!menuOpen){
        menu.classList.add('open');
        list.classList.add('show-menu');
        menuOpen = true;
    }else{
        menu.classList.remove('open');
        list.classList.remove('show-menu');
        menuOpen = false;
    }
});
document.addEventListener("scroll", function(){
    if(menuOpen){
        menu.classList.remove('open');
        list.classList.remove('show-menu');
        menuOpen = false;
    }
});
