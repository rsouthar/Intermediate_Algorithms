function myReplace(str, before, after) {
  var str1 = [str];
  str1.splice(3, 0, before);
  console.log(str1);

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
