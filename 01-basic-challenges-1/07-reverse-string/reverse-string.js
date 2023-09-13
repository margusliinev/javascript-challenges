function reverseString(str) {
    const splitStr = [...str];
    let reversed = '';

    for (i = splitStr.length - 1; i >= 0; i--) {
        reversed += splitStr[i];
    }
    return reversed;
}

module.exports = reverseString;
