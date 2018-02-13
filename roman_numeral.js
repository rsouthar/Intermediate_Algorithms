function convertToRoman(num) {
var results = '';
// Two arrays needed to for the conversion.
var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

//  The number 8 will be divided into each of the elements in the numbers array.
// Once a value is found that is smaller of equal to, the matching letter will be
// pushed and that value will be subtracted from the number.  The process will then
// repeat itself until the number is 0.
for (var i = 0; i <= numbers.length; i++) {
  while (num%numbers[i] < num) {
    results += roman[i];
    num -= numbers[i];
  }
}
 return results;
}

convertToRoman(8);
