function areAllCharactersUnique(string) {
    const charArr = [];

    for (let i = 0; i < string.length; i++) {
        if (!charArr.includes(string[i])) {
            charArr.push(string[i]);
        }
    }

    return charArr.length === string.length;
}

module.exports = areAllCharactersUnique;
