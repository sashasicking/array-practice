
// Define Function
function arrayInfo(anArray){
    console.log(anArray[0]);
    console.log(anArray[anArray.length-1]);
    console.log(anArray[2]);
    anArray.push(5);
    console.log(anArray[5]);
    anArray.push(7);
    console.log(anArray[7]);
}



let nums = [2, 4, 6, 8, 10];
let letters = ["a", "b", "c", "d", "e", "f", "g"];
arrayInfo(nums);
arrayInfo(letters);