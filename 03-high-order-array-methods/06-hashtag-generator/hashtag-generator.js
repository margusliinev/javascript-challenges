function generateHashtag(str) {
    if (!str) {
        return false;
    }
    const strArr = str.split(' ');
    const hashtag = strArr
        .map((word) => {
            return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
        })
        .join('');
    if (hashtag.length > 140) {
        return false;
    } else {
        return `#${hashtag}`;
    }
}

module.exports = generateHashtag;
