function findFirstNonRepeatingCharacter(string) {
    let characters = {};

    for (let char of string) {
        characters[char] = (characters[char] || 0) + 1;
    }

    for (let char of string) {
        if (characters[char] === 1) {
            return char;
        }
    }

    return null;
}

module.exports = findFirstNonRepeatingCharacter;
