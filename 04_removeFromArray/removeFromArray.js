// const removeFromArray = function(arr, ...args) {
//  return arr.filter(item => !args.includes(item));
 

//  console.log(removeFromArray);
// };

const removeFromArray = function (array, ...args) {
    
    const newArray = [];
    
    array.forEach((item) => {
      
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    
    return newArray;
  };




// Do not edit below this line
module.exports = removeFromArray;




