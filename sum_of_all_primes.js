function sumPrimes(num) {
  function isPrime(num){
    if(num === 1 ) //since 1 is neither prime nor composite.
       return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
  var count = 0;
  while (num >= 0) {
    if (isPrime(num)){
      count += num;
    }
    num--;
  }
  return count;
}
sumPrimes(977);
