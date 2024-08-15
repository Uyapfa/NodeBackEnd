const { readFile, writeFile } = require('../utils/fileUtils');

const usersAlphabeticalOrder = async () => {
    const uniqueUsers = readFile('data/uniqueUsers.json');

    const orderedUsers = uniqueUsers.sort((a, b) => a.name.localeCompare(b.name));

    writeFile('data/orderedUsers.json', orderedUsers);
    console.log('orderedUsers.json has been created.');
};

module.exports = usersAlphabeticalOrder;
