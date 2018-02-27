function translatePigLatin(str) {
  var str1 = ' ';
  var reg = /[aeiou]/gi;

  if (str[0].match(reg)) {
    str1 = str + 'way';
  } else {
    var b = str.indexOf(str.match(reg)[0]);
    str1 = str.substr(b) + str.substr(0,b) + 'ay';
  }
  console.log(str1);
  return str1;
}

translatePigLatin("consonant"); // returns onsonantcay
translatePigLatin("california"); // returns "aliforniacay"
translatePigLatin("glove"); // returns oveglay
translatePigLatin("paragraphs"); // returns aragraphspay
translatePigLatin("algorithm"); // returns algorithmway
translatePigLatin("eight"); // returns eightway
