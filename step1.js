const fs = require('fs').promises;
const process = require('process');

/** read file at path and print out data */

async function cat(path) {
    try {

        const data = await fs.readFile(path, 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
    }
}
async function main() {
    if (process.argv.length < 3) {
        console.error("Usage: node script.js <file-path>");
        process.exit(1);
    }

    const path = process.argv[2];
    await cat(path);
}

main();
