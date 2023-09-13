function removeDuplicates(arr) {
    const uniqueArr = arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    }, []);
    return uniqueArr;
}

module.exports = removeDuplicates;
