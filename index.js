// Even Number

let num = [4, 99, 56, 78, 89, 23, 66];

let even = [];

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
        even.push(num[i]);
    }
}
console.log(even);