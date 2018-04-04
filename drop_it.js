function dropElements(arr, func) {
  // Drop them elements.
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  console.log(arr);
  return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
