


const convertToCelsius = function(fNumber) {

  let celsiusConversion = (fNumber -32) * (5 / 9);

  let celsiusRounded = Math.round(celsiusConversion * 10) / 10;

  return celsiusRounded;

};





const convertToFahrenheit = function(cNumber) {

  let farenheitConversion = (cNumber * (9/5) + 32);

  let farenheitRounded = Math.round(farenheitConversion * 10) / 10;
  
  return farenheitRounded;
};










// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
