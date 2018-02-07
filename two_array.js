function diffArray(arr1, arr2) {
  //arr1.filter() takes everything that is not in the second array
  //and arr2.filter() takes everything that is not int he first array
  //then .concat() is used to combine the two arrays
  let diff = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
  
  return diff;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
// output:  ['piglet', 4]
