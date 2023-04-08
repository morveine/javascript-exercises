// The Fibonacci formula is given as, Fn = Fn-1 + Fn-2, where n > 1.

const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) return 'OOPS';
    let result = [0, 1];
    for (let i = 2; i <= num; i++){
        result[i] = result[i-1] + result[i-2];
    }
    return result[num];
};

// Do not edit below this line
module.exports = fibonacci;
