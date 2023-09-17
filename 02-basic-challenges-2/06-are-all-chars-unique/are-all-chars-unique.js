function areAllCharactersUnique(str) {
    const strArr = [...str];

    const tempArr = strArr.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur);
        }
        return acc;
    }, []);

    return strArr.length === tempArr.length;
}

module.exports = areAllCharactersUnique;
