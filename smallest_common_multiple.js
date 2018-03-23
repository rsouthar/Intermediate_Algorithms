function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var c = max;

  var smallCommon = (function(low, high) {
    function scm(l, h) {
      if(h % l === 0) {
        return h;
      } else {
        return scm(l, h + high);
      }
    }
    return scm(low, high);
  });
  for ( var i = min; i <= max; i += 1) {
    c = smallCommon(i, c);
  }
  return c;
}


smallestCommons([1,5]);
