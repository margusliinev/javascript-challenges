function phoneNumberDirectory(phoneNumbers) {
    let directory = new Map();

    for (const entry of phoneNumbers) {
        const [name, phoneNumber] = entry.split(':');
        directory.set(name, phoneNumber);
    }

    return directory;
}

module.exports = phoneNumberDirectory;
