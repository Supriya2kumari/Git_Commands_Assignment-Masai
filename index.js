

let num = [4, 99, 56, 78, 89, 23, 66];

// Odd Number

let odd = [];

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 !== 0){
        odd.push(num[i]);
    }
}
console.log("Odd : ", odd);

// Even Number

let even = [];

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
        even.push(num[i]);
    }
}
console.log("Even : ", even);

// n = 4, pattern print
// *
// * *
// * * *
// * * * *

let n = 5;

for(let i = 1; i <= n; i++){
    let bag = "";
    for(let j = 1; j <= n; j++){
        if(j <= i){
            bag += "* ";
        }
    }
    console.log(bag);
}