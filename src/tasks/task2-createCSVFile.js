const { readFile, writeCSVFile } = require('../utils/fileUtils');

const createCSVFile = async () => {
    const users = readFile('data/usersBackEnd.json');

    const duplicateCount = {};

    users.forEach(user => {
        const key = `${user.name}_${user.surname}`;
        if (duplicateCount[key]) {
            duplicateCount[key].count++;
        } else {
            duplicateCount[key] = { name: user.name, surname: user.surname, count: 1 };
        }
    });

    const csvData = Object.values(duplicateCount).map(user => ({
        Name: user.name,
        Surname: user.surname,
        'Number of times duplicated': user.count
    }));

    writeCSVFile('data/output.csv', csvData);
    console.log('output.csv has been created.');
};

module.exports = createCSVFile;
