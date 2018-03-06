function convertHTML(str) {
  // &colon;&rpar;
  var a = str.split('');
  for (var i = 0; i < a.length; i++) {
    if (a[i] == '"') {
      a[i] = '&quot;';
    } else if (a[i] == '&') {
      a[i] = '&amp;';
    } else if (a[i] == "'") {
      a[i] = '&apos;';
    } else if (a[i] == '<') {
      a[i] = '&lt';
    } else if (a[i] == '>') {
      a[i] = '&gt;';
    }
  }
  a = a.join('');
  console.log(a);
  return a;
}

convertHTML("<>");
convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Shindler's List");
