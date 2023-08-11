/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ").reverse()
    const filteredWords = words.filter(word=>word !=="")
    return filteredWords[0].length
};

lengthOfLastWord("   fly me   to   the moon  ")