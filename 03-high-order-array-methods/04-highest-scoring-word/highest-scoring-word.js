function highestScoringWord(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const words = str.split(' ');
    const wordScore = words
        .map((word) => {
            const wordCharArr = [...word];
            return wordCharArr
                .map((char) => {
                    let score = 0;
                    for (let i = 0; i < alphabet.length; i++) {
                        score++;
                        if (char === alphabet[i]) {
                            return score;
                        }
                    }
                    return score;
                })
                .reduce((acc, cur) => {
                    return (acc += cur);
                }, 0);
        })
        .map((word, index) => {
            return { [words[index]]: word };
        })
        .reduce((acc, cur) => {
            if (Object.values(acc) < Object.values(cur)) {
                acc = cur;
            }
            return acc;
        }, {});

    return Object.keys(wordScore)[0];
}

module.exports = highestScoringWord;
