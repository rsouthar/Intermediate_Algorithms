function pairElement(str) {
  var newArray = [];
  var newDNA = function(char) {
    switch (char) {
      case 'A':
        newArray.push(['A','T']);
        break;
      case 'T':
        newArray.push(['T','A']);
        break;
      case 'G':
        newArray.push(['G','C']);
        break;
      case 'C':
        newArray.push(['C','G']);
        break;
    }
  }
  for (var i = 0; i < str.length; i++) {
    newDNA(str[i]);
  }

  return newArray;
}

pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");
