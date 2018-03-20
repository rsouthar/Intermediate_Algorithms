function uniteUnique(arr) {
  var newArray = [];
  for (var i = 0; i < arguments.length; ++i) {
    for (var j = 0; j < arguments[i].length; ++j)
    newArray.push(arguments[i][j]);
    var b = newArray.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });

  }
  return b;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);// returns [ 1, 3, 2, 5, 4 ]
