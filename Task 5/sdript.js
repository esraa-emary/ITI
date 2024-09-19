// ************* part1 ****************

var arr = new Array();
for (let index = 0; index < 5; index++) {
    var get = prompt("enter a number");
    arr.push(get);
}

console.log(arr.sort(function ss(a,b){
    return a-b ;
}));

console.log(arr.sort(function ss(a,b){
    return b-a ;
}))

// ************* part2 ****************

var Rad = prompt("enter radius");
console.log(Math.PI * Rad *Rad);

var sqr = prompt("enter number to calculate sqrt");
alert(Math.sqrt(sqr));

var angle = prompt("enter anglw to calculate its cos");
console.log(Math.cos(angle * (Math.PI/180.0)));

// ************* part3 ****************

var dispVal =  {
    name:"Esraa",
    city:"giza",
}

for (var key in dispVal){
    console.log(key + " : " + dispVal[key]);
}