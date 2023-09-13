function titleCase(str) {
    const newStr = str.split(' ').map((item) => {
        return `${item.slice(0, 1).charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`;
    });
    return newStr.join(' ');
}

module.exports = titleCase;
