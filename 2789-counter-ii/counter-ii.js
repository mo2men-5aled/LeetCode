/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init

    const increment = () => {
        return counter +=1
    }
    const decrement = () => {
        return counter -=1
    } 
    const reset = () => {
        return counter=init
    }

    return {
        increment,decrement,reset
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */