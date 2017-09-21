/*!
 * inherit.js
 * bqliu | 05/02/2017
 * Thank Nicholas C.Zakas
 */

var proto = function(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

export default const parasitic = function(subType, superType) {
  const prototype = proto(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
