function findFirstNonRepeatingCharacter(str) {
    const strArr = [...str];

    const nonRepCharArr = strArr.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur);
            return acc;
        } else {
            return acc.filter((char) => char !== cur);
        }
    }, []);

    const firstNonRepChar = nonRepCharArr[0];

    return firstNonRepChar ? firstNonRepChar : null;
}

module.exports = findFirstNonRepeatingCharacter;
