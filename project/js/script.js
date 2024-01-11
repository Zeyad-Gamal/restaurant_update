let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

};

 var posts=[];
async function displaySalad() {

    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
     posts = await response.json();
    console.log(posts);
   
}

async function displaySteak() {
    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=steak');
     posts = await response.json();
    console.log(posts);   
}


async function displayFries() {
    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=fries');
     posts = await response.json();
    console.log(posts);   
}


var mealglobal;
var meals = '';
 async function displayd(mealType) {

    mealglobal=mealType;
    for(var i = 0 ; i<posts.recipes.length; i++){

                 

meals+=`<div class="box ${mealType}">

<div class="image">
    <img src="${posts.recipes[i].image_url}" alt="">
    
</div>


<div class="content">
    <div class="price">  <span class="food">${posts.recipes[i].title}</span></div>

    <div class="box-buttons">
    <a  href="${posts.recipes[i].source_url}" class="btn" target="_blank">Explore </a>
    <a  href="crud.html?title=${posts.recipes[i].title}&imgurl=${posts.recipes[i].image_url}&srcurl=${posts.recipes[i].source_url}" class="btn menu"><i  class="bi bi-cart"></i></a>
</div>
</div>


</div>`;
    }


    document.getElementById('foodcont').innerHTML=meals;
    // console.log(slidermeals);
    // document.getElementById('slidermeals').innerHTML+= slidermeals;

}

async function displayAll() {
    await displaySalad();
    await displayd('salad');
    await displaySteak();
    await displayd('steak');
    await displayFries();
   await displayd('fries');
   const urlParams = new URLSearchParams(window.location.search);
   const mealtyp = urlParams.get('mealtyp');
   var mealsBoxs=document.querySelectorAll('.packages .box-container .box');
   console.log(mealtyp);
   for(var i=0 ; i<mealsBoxs.length;i++ ){
    //    console.log(mealsBoxs[i]);
    if((mealsBoxs[i]).classList.contains(mealtyp)){
        // mealsBoxs[i].style.display='flex';
    }
    else{
        mealsBoxs[i].style.display='none';

    }
   }
}


 displayAll();
 




 $(document).ready(function(){
    $('.loading .lds-default').fadeOut(3000,function(){
        $('.loading').fadeOut(3000)
    })
})










searchMeel.onkeyup = function () {
    var meals = '';
        
    for (var i = 0; i < posts.recipes.length; i++) {
        
        if (posts.recipes[i].title.toLowerCase().includes(searchMeel.value.toLowerCase())) {
    
meals+=`<div class="box ${mealglobal}">

<div class="image">
    <img src="${posts.recipes[i].image_url}" alt="">
    
</div>


<div class="content">
    <div class="price">  <span class="food">${posts.recipes[i].title}</span></div>

    <div class="box-buttons">
    <a  href="${posts.recipes[i].source_url}" class="btn" target="_blank">Explore </a>
    <a  href="crud.html?title=${posts.recipes[i].title}&imgurl=${posts.recipes[i].image_url}&srcurl=${posts.recipes[i].source_url}" class="btn menu"><i  class="bi bi-cart"></i></a>
</div>
</div>


</div>`;
    
        }
    }
    document.getElementById('foodcont').innerHTML = meals;

}