const isValidIPv4 = (string) => {
    const octets = string.split('.');

    if (octets.length !== 4) {
        return false;
    }

    const isValidIPv4 = octets.every((octet) => parseInt(octet) <= 255 && parseInt(octet) >= 0 && octet === parseInt(octet).toString());

    return isValidIPv4;
};

module.exports = isValidIPv4;
