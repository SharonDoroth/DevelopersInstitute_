//reverse a single word
function reverseWord(str) {
    let returnStr = '';
    //loop in reverse order
    for(let i = str.legth-1; i >= 0; i--){
        returnStr += str[i]
    }
    return returnStr
}

//console.log(reverseWord('given'));
//get words from a given string
function reverseAll(str){
    let arr = str.split(" ");
    console.log(arr);
    let returnArr = [];
    for(let i = 0; i < arr.length; i++){
        returnArr.push(reverseWord(arr[i]));
    }
    return returnArr.join(' ');

}

console.log(reverseAll('reverse each word in a given String'));


function x(){
    
}