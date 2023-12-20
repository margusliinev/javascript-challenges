const fs = require('fs/promises');
const path = require('path');

async function renameTestFiles(folderPath) {
    try {
        const stat = await fs.stat(folderPath);

        if (stat.isDirectory()) {
            const files = await fs.readdir(folderPath);

            for (const file of files) {
                const filePath = path.join(folderPath, file);
                await renameTestFiles(filePath);
            }
        } else if (folderPath.includes('-test')) {
            const newPath = folderPath.replace('-test', '.test');
            await fs.rename(folderPath, newPath);
            console.log(`Renamed: ${folderPath} to ${newPath}`);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Before starting a new section of challenges, run this script to rename all the test files in the section directory
// This allows you to run the tests in the current section while tests in the other directories stay disabled

const folderPath = '/home/margus/code/javascript-challenges/07-stacks-queues-linked-lists';
renameTestFiles(folderPath);
