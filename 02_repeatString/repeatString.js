


const repeatString = function(word, num) {
    
   
    if(num<0) return "ERROR";
    
    
    let string = "";
   
   
    for (let i=0; i< num; i++){string += word;}
    
    
    return string;

  


}


// const repeatString = function(word, number) {
   
//     if(number < 0) {
//         return "ERROR";
//     }

//     let string = "";


//     for (let i = 0; i< number; i++) {
//         string = string + word;
//     }
//     return string
// }

// repeatString is like a recipe that has two ingredients: a "string and a "num"
// if the "num" ingredient is less than zero, the recipe will stop and say "ERROR"
// otherwise, the recipe will make a new string by repeating the "string" ingredient as many 



// Do not edit below this line
module.exports = repeatString;
