function findMissingLetter(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startIndex = alphabet.indexOf(arr[0]);

    for (let i = 0; i < alphabet.length; i++) {
        if (arr[i] !== alphabet[startIndex + i]) {
            return alphabet[startIndex + i];
        }
    }
}

module.exports = findMissingLetter;
