function sumFibs(num) {
  var count, display = 0, t1 = 0, t2 = 1;
  for (var i = 0; i <=num; i++) {
    count = t1 + t2;
    t1 = t2;
    t2 = count;
    if (count % 2 !== 0 && count <= num) {
      display += count;
    }
  }
  console.log(display + 1);
  return display + 1;
}

sumFibs(1000);
