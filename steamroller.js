function steamrollArray(arr) {
  return arr.reduce(function flat(r, a) {
    return Array.isArray(a) && a.reduce(flat, r) || r.concat(a);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
