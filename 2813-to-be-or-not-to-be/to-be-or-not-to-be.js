/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const toBe = (x) => {
    if (val !== x) throw new Error("Not Equal");
    else return true; 
    }

  const notToBe = (x) => {
    if (val === x) throw new Error("Equal");
    else return true;
  };
  return {
    toBe,
    notToBe,
  };
};


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */