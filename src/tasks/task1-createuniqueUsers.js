const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { readFile, writeFile } = require('../utils/fileUtils');

const createuniqueUsers = async () => {
    const users = readFile('data/usersBackEnd.json');

    const uniqueUsers = [];
    const userMap = new Map();

    users.forEach(user => {
        const key = `${user.name}_${user.surname}`;
        if (!userMap.has(key)) {
            userMap.set(key, true);
            uniqueUsers.push({ ...user, id: uuidv4() });
        }
    });

    writeFile('data/uniqueUsers.json', uniqueUsers);
    console.log('uniqueUsers.json has been created.');
};

module.exports = createuniqueUsers;
