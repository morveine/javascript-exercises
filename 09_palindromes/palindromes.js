const palindromes = function (str) {
    str = str.replace(/[^\w\s\']|_/g, "")
        .replace(/ /g,'')
        .toLowerCase();

    return (str.split("").reverse().join("") === str);
};

// Do not edit below this line
module.exports = palindromes;
