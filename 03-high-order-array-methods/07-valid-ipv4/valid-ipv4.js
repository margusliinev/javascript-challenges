const isValidIPv4 = (str) => {
    const strArr = str.split('.');
    if (strArr.length !== 4) {
        return false;
    }
    const isValidRange = strArr.every((octet) => {
        const num = Number(octet);
        return num >= 0 && num <= 255 && octet[0] != 0;
    });

    return isValidRange;
};

module.exports = isValidIPv4;
