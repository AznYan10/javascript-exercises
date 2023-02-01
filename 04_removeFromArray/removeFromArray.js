const removeFromArray = function() {
    let arrayNum = arguments[0];
    const args = Array.from(arguments);

    for (let i = 1; i < args.length; i++) {
        for (let j = 0; j < arrayNum.length; j++) {
            if (arrayNum[j] === args[i]) {
                arrayNum.splice(j, 1);
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
