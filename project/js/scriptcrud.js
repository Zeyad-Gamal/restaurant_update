var dName = document.getElementById('dName')
var dPrice = document.getElementById('dPrice')
var dCategory = document.getElementById('dCategory')
document.getElementById('dPrice').value='100'
var drinks = [];

var searchInput = document.getElementById('searchInput')
var inputs = document.getElementsByClassName('form-control');
var newbtn = document.getElementById('newbtn');
// console.log(inputs)
var cuurentinedx = 0;
var numofnull=0;
if (localStorage.getItem('drinksdata')) {
    drinks = JSON.parse(localStorage.getItem('drinksdata'))
    displayData();
}

newbtn.onclick = function () {
    if (newbtn.innerHTML == 'Add') {
        addDrink();
    }
    else {
        updateDrink();
    }
    displayData();
    clearData();
}


function addDrink() {

    for(var i = 0 ; i<inputs.length-1 ; i++){
        if(inputs[i].value==''){
            numofnull++;
        }
    
    }

    if(numofnull>0){
        alert('Please, full all data....')
    }
    else{

        var drink = {
        name: dName.value,
        price: dPrice.value,
        category: dCategory.value,

    }
    drinks.push(drink)
    var stringarray = JSON.stringify(drinks)

    localStorage.setItem('drinksdata', stringarray)
    
    }

}
function displayData() {
    var rowColor='';
    var cartona = '';
    for (var i = 0; i < drinks.length; i++) {
        if(i%2===0){
            rowColor = ' rgba(204, 204, 204, 0.639)';
        }
        else{
            rowColor='whitesmoke';
        }
        var quanprice =parseInt( drinks[i].price )* parseInt( drinks[i].category);
        cartona += `<tr><td  style='background-color:${rowColor};'>${drinks[i].name}</td>
    <td style='background-color:${rowColor};'>${drinks[i].category}</td>
    <td style='background-color:${rowColor};'>$${quanprice}</td>
    <td style='background-color:${rowColor};'><button class='btn btn-warning' onclick='getDrinkInfo(${i})'>update</button></td>
    <td style='background-color:${rowColor};'><button onclick='deleteDrink(${i})' class='btn btn-danger'>delete</button></td></tr>`
    }
    document.getElementById('table').innerHTML = cartona
}


function deleteDrink(index) {
    drinks.splice(index, 1);
    var stringarray = JSON.stringify(drinks)

    localStorage.setItem('drinksdata', stringarray)
    displayData()
}

function clearData() {
    // productName.value=''
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
}




function getDrinkInfo(index) {
    //    console.log(products[index])
    curentDrink = drinks[index]
    cuurentinedx = index;

    dName.value = curentDrink.name
    dPrice.value = curentDrink.price
    dCategory.value = curentDrink.category


    newbtn.innerHTML = 'Update'


}

function updateDrink() {
    var drink = {
        name: dName.value,
        price: dPrice.value,
        category: dCategory.value,

    }
    drinks[cuurentinedx] = drink;
    var stringarray = JSON.stringify(drinks)

    localStorage.setItem('drinksdata', stringarray)

    newbtn.innerHTML = 'Add';

}



searchInput.onkeyup = function () {
    var rowColor='';
    var cartona = '';
        
    for (var i = 0; i < drinks.length; i++) {
        if(i%2===0){
            rowColor = ' rgba(204, 204, 204, 0.639)';
        }
        else{
            rowColor='whitesmoke';
        }
        if (drinks[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
    cartona += `<tr><td  style='background-color:${rowColor};'>${drinks[i].name}</td>
    <td style='background-color:${rowColor};'>${drinks[i].category}</td>
    <td style='background-color:${rowColor};'>${drinks[i].price}</td>
    <td style='background-color:${rowColor};'><button class='btn btn-warning' onclick='getDrinkInfo(${i})'>update</button></td>
    <td style='background-color:${rowColor};'><button onclick='deleteDrink(${i})' class='btn btn-danger'>delete</button></td></tr>`
        }
        document.getElementById('table').innerHTML = cartona
    }
}

