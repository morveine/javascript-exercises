const sumAll = function (numOne, numTwo) {
    if ((numOne < 0 || numTwo < 0) || (typeof (numOne) != 'number' || typeof (numTwo) != 'number')) return "ERROR";
    let result = 0;
    if (numOne > numTwo) {
        for (i = numTwo; i <= numOne; i++) {
            result += i;
        }
        return result;
    } else {
        for (i = numOne; i <= numTwo; i++) {
            result += i;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
