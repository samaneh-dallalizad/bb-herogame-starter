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
}
function equipWeapon(hero) {
    if(hero.inventory.length===0){
        return;
    }
    hero.weapon=hero.inventory[0];
}