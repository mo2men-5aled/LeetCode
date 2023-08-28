/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels =['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']


    const partOne = s.slice(0, s.length / 2).split("")
    const partTwo = s.slice(s.length / 2, s.length).split("")

    let counterForFirstHalf = 0;
    let counterForSecondHalf = 0;

    partOne.map(
        (char)=>{
            if(vowels.includes(char)){
                counterForFirstHalf++
            }
        }
    )
    partTwo.map(
        (char)=>{
            if(vowels.includes(char)){
                counterForSecondHalf++
            }
        }
    )

    if(counterForFirstHalf === counterForSecondHalf){
        return true
    }else{
        return false
    }

};

let str = "book"
halvesAreAlike(str)