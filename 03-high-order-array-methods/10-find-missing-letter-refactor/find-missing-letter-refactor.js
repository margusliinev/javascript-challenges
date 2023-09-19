function findMissingLetter(charArr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startIndex = alphabet.indexOf(charArr[0]);
    const newAlphabet = alphabet.slice(startIndex);

    const missingLetter = charArr.reduce((acc, cur, index) => {
        if (cur !== newAlphabet[index] && !acc) {
            acc = newAlphabet[index];
        }
        return acc;
    }, '');

    return missingLetter;
}

module.exports = findMissingLetter;
