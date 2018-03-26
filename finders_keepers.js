function findElement(arr, func) {
  var num;
  for (var i = 0; i < arr.length; i++){
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
  return num;
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
