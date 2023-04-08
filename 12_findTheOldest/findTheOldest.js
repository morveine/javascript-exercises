const findTheOldest = function(array) {
    let temp = [];
    const year = new Date().getFullYear();
    for (let person of array) {
        temp.push((person.yearOfDeath || year) - person.yearOfBirth);
    }
    return array[temp.indexOf(Math.max(...temp))];
};

// Do not edit below this line
module.exports = findTheOldest;