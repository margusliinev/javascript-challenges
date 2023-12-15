function findMissingLetter(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const missingLetterCharcodes = arr.map((char) => {
        return char.charCodeAt();
    });

    const missingCharcode = missingLetterCharcodes.find((_, index) => missingLetterCharcodes[index] !== missingLetterCharcodes[index + 1] - 1) + 1;

    return String.fromCharCode(missingCharcode);
}

module.exports = findMissingLetter;
