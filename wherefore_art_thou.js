function whatIsInAName(collection, source) {
// This javascript is in ES6

  let arr = [];
  const keys = Object.keys(source);
  arr = collection.filter(obj => keys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
  console.log(arr);
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" },
               { first: "Mercutio", last: null },
               { first: "Tybalt", last: "Capulet" }],
               { last: "Capulet" });
