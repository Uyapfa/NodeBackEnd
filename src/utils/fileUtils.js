const fs = require('fs');
const fastcsv = require('fast-csv');

const readFile = (filePath) => {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};

const writeFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const writeCSVFile = (filePath, data) => {
    const ws = fs.createWriteStream(filePath);
    fastcsv
        .write(data, { headers: true })
        .pipe(ws);
};

module.exports = {
    readFile,
    writeFile,
    writeCSVFile
};
