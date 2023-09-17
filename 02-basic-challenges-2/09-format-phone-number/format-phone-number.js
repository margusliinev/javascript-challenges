function formatPhoneNumber(numArr) {
    return `(${numArr.slice(0, 3).join('')}) ${numArr.slice(3, 6).join('')}-${numArr.slice(6).join('')}`;
}

module.exports = formatPhoneNumber;
