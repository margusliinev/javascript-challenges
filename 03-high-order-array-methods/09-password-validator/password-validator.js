function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
    return passwordRegex.test(password);
}

module.exports = validatePassword;
