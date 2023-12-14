function generateHashtag(string) {
    if (!string) return false;
    const phrase = string
        .trim()
        .split(' ')
        .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join('');

    const hashtag = `#${phrase}`;

    if (hashtag.length > 140) {
        return false;
    }

    return hashtag;
}

module.exports = generateHashtag;
