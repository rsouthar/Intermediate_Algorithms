function myReplace(str, before, after) {
  // Find the index of the before string in the str string and store it in newStr.
  var newStr = str.indexOf(before);
  // Test and see if teh string that is found is uppercased and if it is,
  // uppper case the first letter of the variable after.
  if (str[newStr] === str[newStr].toUpperCase()) {
    after = after.chatAt(0).toUpperCase() + after.slice(1);
  }
  // Replace the string before with the string after.
  str = str.replace(before, after);
  // Return the result of str.
  return str;

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
