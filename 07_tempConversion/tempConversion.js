const convertToCelsius = function(fah) {
  let convert = (fah - 32) * 5 / 9;
  convert = Math.round(convert * 10) / 10;
  return convert;
};

const convertToFahrenheit = function(cel) {
  let convert = (cel * 1.8) + 32;
  convert = Math.round(convert * 10) / 10;
  return convert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
