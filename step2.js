const fs = require('fs').promises;
const process = require('process');
const axios = require('axios');

/** read file at path and print data */


async function cat(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
    }
}

async function webCat(url) {
    try {
        const resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

async function main() {
    const path = process.argv[2];

    if (path && path.slice(0, 4) === 'http') {
        await webCat(path);
    } else {
        await cat(path);
    }
}

main();