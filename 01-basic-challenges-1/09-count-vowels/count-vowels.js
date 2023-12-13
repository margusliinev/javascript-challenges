function countVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const cleanedString = string.toLowerCase();
    let count = 0;

    for (let i = 0; i < cleanedString.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (vowels[j] === cleanedString[i]) {
                count++;
            }
        }
    }

    return count;
}

module.exports = countVowels;
