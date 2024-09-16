// ///////////////////  part 1  ////////////////////////

document.write("<span style = 'font-size:6rem'>"+"Heading"+"</span><br><hr>")
var get = prompt("Enter a message");
while (typeof get != "string")get = prompt("Enter a valid message");
var num = 6;
for(var i = 0 ; i < 6 ; ++i){
    if(i == 0){
        document.write("<span style='font-size:5rem'>"+get+"</span>" +"<br>");
    }
    else if(i == 1){
        document.write("<span style='font-size:4.5rem'>"+get+"</span>" +"<br>");
    }
    else if(i == 2){
        document.write("<span style='font-size:4rem'>"+get+"</span>" +"<br>");
    }
    else if(i == 3){
        document.write("<span style='font-size:3.5rem'>"+get+"</span>" +"<br>");
    }
    else if(i == 4){
        document.write("<span style='font-size:3rem'>"+get+"</span>" +"<br>");
    }
    else if(i == 5){
        document.write("<span style='font-size:2.5rem'>"+get+"</span>" +"<br>");
    }
}

// ///////////////////  part 2  ////////////////////////

var getNumber = prompt("Enter a number");
while (isNaN(getNumber)){
    getNumber = Number(prompt(`Enter a valid number`));
}
var total = 0;
for(var i = 1 ; i <= getNumber ; ++i){
    var getNumberElement = Number(prompt(`Enter a number ${i}`));
    while (isNaN(getNumberElement)){
        getNumberElement = Number(prompt(`Enter a valid number`));
    }
    total += getNumberElement;
    if (getNumberElement === 0 || total >= 100) break;
}
console.log(total);

// ///////////////////  part 3  ////////////////////////

var x,y,z;
x = Number(prompt("Enter x"));
while (isNaN(x)){
    x = Number(prompt("Enter a valid number for x"));
}
y = Number(prompt("Enter y"));
while (isNaN(y)){
    y = Number(prompt("Enter a valid number for y"));
}
z = Number(prompt("Enter z"));
while (isNaN(y)){
    z = Number(prompt("Enter a valid number for z"));
}
if (x % y === 0 && x % z === 0)alert("x is divisible by y and z");
else if (y % x === 0 && y % z === 0)alert("y is divisible by x and z");
else if (z % x === 0 && z % y === 0)alert("z is divisible by x and y");
else if (x % z === 0)alert("x is divisible by z");
else if (y % x === 0)alert("y is divisible by x");
else if (y % z === 0)alert("y is divisible by z");
else if (z % x === 0)alert("z is divisible by x");
else if (z % y === 0)alert("z is divisible by y");
else alert("no number is divisible by another");

// ///////////////////  part 4  ////////////////////////

var x,y,z;
x = Number(prompt("Enter x"));
while (isNaN(x)){
    x = Number(prompt("Enter a valid number for x"));
}
y = Number(prompt("Enter y"));
while (isNaN(y)){
    y = Number(prompt("Enter a valid number for y"));
}
z = prompt("Enter the string z");
while (typeof z != "string" || (z != "odd" && z != "even" && z != "no")){
    z = prompt("Enter a valid string z");
}
var nums = "";
if (z === "odd"){
    if (x % 2 === 0){
        nums += "odd numbers is: ";
        for (let index = x+1; index <= y; index+=2) {
            nums += `${index}`;
        }
    }
    else{
        for (let index = x; index <= y; index+=2) {
            nums += `${index}`;
        }
    }
    alert(nums);
}
else if (z === "even"){
    nums += "even numbers is: ";
    if (x % 2 === 0){
        for (let index = x; index <= y; index+=2) {
            nums += `${index}, `;
        }
    }
    else{
        for (let index = x+1; index <= y; index+=2) {
            nums += `${index}, `;
        }
    }
    alert(nums);
}
else if(z === "no"){
    nums += "numbers is: ";
    for (let index = x; index <= y; index++) {
        nums += `${index}, `;
    }
    alert(nums);
}