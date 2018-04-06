function truthCheck(collection, pre) {
  var counter = 0;

    for (var c in collection) {
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
    }
  }
return counter == collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"},
            {"user": "Dipsy", "sex": "male"},
            {"user": "Laa-Laa", "sex": "female"},
            {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0},
            {"user": "Dipsy", "sex": "male", "age": 3},
            {"user": "Laa-Laa", "sex": "female", "age": 5},
            {"user": "Po", "sex": "female", "age": 4}], "age");
truthCheck([{"single": ""}, {"single": "double"}], "single");
