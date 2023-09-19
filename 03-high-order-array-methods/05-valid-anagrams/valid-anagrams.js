function validAnagrams(str1, str2) {
    const str1Arr = str1.split('');
    const str2Arr = str2.split('');

    const record1 = str1Arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, []);

    const record2 = str2Arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, []);

    const keys1 = Object.keys(record1).sort();
    const values1 = Object.values(record1).sort();
    const keys2 = Object.keys(record2).sort();
    const values2 = Object.values(record2).sort();

    const doKeysMatch = keys1.every((key) => keys2.includes(key));
    const doValuesMatch = values1.every((value, index) => value === values2[index]);

    const isAnagram = doKeysMatch && doValuesMatch;

    return isAnagram;
}

module.exports = validAnagrams;
