function formatPhoneNumber(numbers) {
    const formattedNumbers = numbers.join('');
    const areaCode = formattedNumbers.slice(0, 3);
    const prefix = formattedNumbers.slice(3, 6);
    const lineNumber = formattedNumbers.slice(6);
    return `(${areaCode}) ${prefix}-${lineNumber}`;
}

module.exports = formatPhoneNumber;
