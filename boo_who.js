function booWho(bool) {
  // using typeof will check to see if the variable is a boolean or not.  If it is,
  // it will return true.  If not, then false.
  return typeof bool === "boolean";
}

booWho(null);
