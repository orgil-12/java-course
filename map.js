// Array дахь тоонуудыг квадрат болгоод шинэ array-д хадгалах:
// Гар утасны дугаарууд хадгалсан array байна. Зөвхөн эхний 4 оронн хадгалсан шинэ array үүсгэх 
// let gi = [2,4,5,6];
// function array(value){
//    return value*value
// }

// let newArray = gi.map(array);
// console.log(newArray);


let arrayWithObj = [
    { key: "a", value: "objects"}
]


let gi = [0, 0, -1, 5, 6, 12, -13];
function array(value){
    return Math.floor(value / 10000);
    
}

function myFilter(currentValue, index, originalArray) {
    return currentValue > 0;
}

let newArray = gi.map(array);
// console.log(newArray)
let newArr = gi.filter(myFilter)
console.log(gi.find(myFilter))
// console.log(newArr)