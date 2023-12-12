function countOccurrences(string, char) {
    let times = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) times++;
    }
    return times;
}

module.exports = countOccurrences;
