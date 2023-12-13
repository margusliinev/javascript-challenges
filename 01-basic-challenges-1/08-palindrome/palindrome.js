function isPalindrome(string) {
    const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let newString = '';

    for (let i = cleanedString.length - 1; i >= 0; i--) {
        newString += cleanedString[i];
    }

    return newString === cleanedString;
}

module.exports = isPalindrome;
