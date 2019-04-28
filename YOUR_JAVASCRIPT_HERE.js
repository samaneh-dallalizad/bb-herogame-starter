// Write your JS here
let hero={
    name:"samaneh",
    heroic:true,
    inventory:[],
    health:10,
    weapon:{
        type:"",
        damage:2
    }
}

function rest(param){
    if(param.health === 10){
        alert("oops");
    }
    param.health = 10;    
    return param;
}
function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon);
    displayStats(hero);
}
function equipWeapon(hero) {
    if(hero.inventory.length===0){
        return;
    }
    hero.weapon=hero.inventory[0];
    displayStats(hero);
}


///////////////

function createKey(key){
    let span = document.createElement("span");
    if(key) {
        span.innerHTML = `${key}: ` 
    }
    return span;
}
function displayArray(arr) {
    const ul = document.createElement("ul");
    arr.forEach(element => {
        ul.appendChild(displayElement(element)); 
    })
    return ul;
}

function displayObject(object) {
    const ul = document.createElement("ul");
    Object.keys(object).forEach(element => {
        ul.appendChild(displayElement(object[element],element)); 
    });
    return ul;
}

function displayElement (element,key) {
    
    let listItem=document.createElement("li");
    listItem.appendChild(createKey(key))

    if (Array.isArray(element))
    {
        listItem.appendChild(displayArray(element))
    }
    else if(typeof(element) === 'object') {
        listItem.appendChild(displayObject(element)); 
    }
    else{
        let span = document.createElement("span");
        span.innerHTML = `${element}`
        listItem.appendChild(span);
    }
    return listItem;
}


function displayStats(object){
    let myNode = document.getElementById("displayStats");
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild)
    }       
    myNode.appendChild(displayObject(object))
}

displayStats(hero);

//////////////////////////
/**change name */
function changeName(){
    event.preventDefault();
   const hero_name=document.getElementById("hero_name");
   hero.name=hero_name.value;
   hero_name.value='';
   displayStats(hero);
}

//////////////////////////
/**fight */

function fight(){
    if(hero.inventory.length===0){
        alert("game over!!!!");
        return;
    }
    equipWeapon(hero);
    hero.inventory.shift();
    alert(`I used weapon(${hero.weapon.type}) and damaged enemy by (${hero.weapon.damage})`);
    hero.weapon = {};
    displayStats(hero);
}


function pickupAndDelete(hero,weapon) {
    pickUpItem(hero,weapon);
    document.getElementById(event.target.id).remove()
}