function countCharacters(word) {
    return word.split('').reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 1;
        } else {
            acc[cur] += 1;
        }
        return acc;
    }, {});
}

function validAnagrams(word1, word2) {
    let wordCharacters1 = countCharacters(word1);
    let wordCharacters2 = countCharacters(word2);

    let keys1 = Object.keys(wordCharacters1);
    let keys2 = Object.keys(wordCharacters2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (keys1[key] !== keys2[key]) {
            return false;
        }
    }

    return true;
}

module.exports = validAnagrams;
