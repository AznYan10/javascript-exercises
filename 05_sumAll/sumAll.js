const sumAll = function(x, y) {
    let sum = 0;
    let bigger;
    let smaller;

    if (x < 0 || y < 0 || (Number.isInteger(x) === false) || (Number.isInteger(y) === false)) {
        return "ERROR";
    }

    if (x > y) {
        bigger = x;
        smaller = y;
    } else {
        bigger = y;
        smaller = x;
    }
    for (let i = smaller; i <= bigger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
