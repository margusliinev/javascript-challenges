function highestScoringWord(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const words = string.toLowerCase().split(' ');

    const wordScores = words
        .map((word) => {
            let wordScore = 0;

            for (let i = 0; i < word.length; i++) {
                let wordIndex = alphabet.indexOf([word[i]]) + 1;
                wordScore += wordIndex;
            }

            return { word, score: wordScore };
        })
        .reduce(
            (acc, cur) => {
                if (cur.score > acc.score) {
                    return cur;
                } else {
                    return acc;
                }
            },
            { word: '', score: 0 },
        );

    return wordScores.word;
}

module.exports = highestScoringWord;
