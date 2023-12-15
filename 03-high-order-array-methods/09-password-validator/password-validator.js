function validatePassword(password) {
    const isLengthValid = password.length >= 8;

    const hasUppercaseLetter = password.split('').some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

    const hasLowercaseLetter = password.split('').some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

    const hasDigit = password.split('').some((char) => !isNaN(parseInt(char, 10)));

    return isLengthValid && hasUppercaseLetter && hasLowercaseLetter && hasDigit;
}

module.exports = validatePassword;
