// const leapYears = function(yearInput) {


//     let leapChecked;




//     if (((yearInput % 4 === 0) && (yearInput % 100 !== 0))       
//     ||      (yearInput % 400 ===0 )){

//         leapChecked = true;
//     } else {
//         leapChecked = false;
//     }
//     return leapChecked;
// };


const leapYears = function(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
};



// Do not edit below this line
module.exports = leapYears;