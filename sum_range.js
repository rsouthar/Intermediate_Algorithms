function sumAll(arr) {
  //create a new array
 var newArr = [];

 //find the smallest and largest number in the array
 var min = Math.min(arr[0], arr[1]);
 var max = Math.max(arr[0], arr[1]);

 //loop through the smallest and largest numbers and push them in to the new array
 for (var i = min; i <= max; i++) {
     newArr.push(i);
 }

 //use the reduce function to accumulate the totals of the new array and put it into a the variable sum
 var sum = newArr.reduce(function(a, b) {
     return a + b;
 });
//return the total
 return sum;
}
sumAll([10, 5]);
