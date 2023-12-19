function wordFrequencyCounter(str) {
    const words = str.toLowerCase().split(/\W+/);

    const wordFrequencies = new Map();

    for (const word of words) {
        if (word === '') continue;

        if (wordFrequencies.has(word)) {
            wordFrequencies.set(word, wordFrequencies.get(word) + 1);
        } else {
            wordFrequencies.set(word, 1);
        }
    }

    return wordFrequencies;
}

module.exports = wordFrequencyCounter;
