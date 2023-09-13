function countVowels(str) {
    const formatStr = str.toLowerCase();
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < formatStr.length; i++) {
        const char = formatStr[i];
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

module.exports = countVowels;
