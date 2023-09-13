function countOccurrences(str, char) {
    const stringArr = [...str];
    const occurrences = stringArr.reduce((acc, cur) => {
        if (cur === char) {
            acc++;
        }
        return acc;
    }, 0);
    return occurrences;
}

module.exports = countOccurrences;
