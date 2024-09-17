// ///////////////////// part 1 /////////////////////////////

var get1 = prompt("Enter the string");
var count = 0;
var get2 = prompt("Enter the char");
var get3 = confirm("is there difference between uber and lower case?");
if (get3) {
    for (let index = 0; index < get1.length; index++) {
        if (get1[index] === get2) {
            count ++;
        }
    }
}
else {
    let lower = get1.toLowerCase();
    for (let index = 0; index < lower.length; index++) {
        if (lower[index] === get2) {
            count ++;
        }
    }
}
alert(`number is: ${count}`);

// ///////////////////// part 2 /////////////////////////////

var get4 = prompt("Enter the string to check palindrome");
var get5 = confirm("is there difference between uber and lower case?");
var ans="";
var flag = true;
if (get5) {
    var start = 0,end = get4.length-1;
    while (start != end){
        if (get4[start] != get4[end]){
            ans = "not palindrome";
            flag = false;
            break;
        }
        start ++;
        end --;
    }
    if (flag) ans = "palindrome";
}
else {
    let lower = get4.toLowerCase();
    var start = 0,end = get4.length-1;
    while (start != end){
        if (lower[start] != lower[end]){
            ans = "not palindrome";
            flag = false;
            break;
        }
        start ++;
        end --;
    }
    if (flag) ans = "palindrome";
}
alert(`the string is ${ans}`);

// ///////////////////// part 3 /////////////////////////////

function largestWord(){
    var get6 = prompt("Enter a string to get largest word");
    var word="";
    var len = 0;
    var item = "";
    for (let index = 0; index < get6.length; index++) {
        if (get6[index] === ' '){
            if (item.length > len){
                len = item.length;
                word = item;
                item = ""; 
            }
        }
        else{
            item += get6[index];
        }
    }
    alert(`the largest word is ${word}`);
}
largestWord();