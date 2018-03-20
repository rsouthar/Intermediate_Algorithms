function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var a = /[\_\s]/g;

  var b = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return b.replace(a, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
