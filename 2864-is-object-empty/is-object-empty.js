/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let keys = Object.keys(obj)
    if(keys.length) return false
    else return true
};
