const express = require('express');
const { readFile, writeFile } = require('../utils/fileUtils');
const { v4: uuidv4 } = require('uuid');

const task5RESTfulAPI = () => {
    const app = express();
    app.use(express.json());

    app.get('/uniqueUsers', (req, res) => {
        const uniqueUsers = readFile('data/uniqueUsers.json');
        res.json(uniqueUsers);
    });

    app.get('/orderedUsers', (req, res) => {
        const orderedUsers = readFile('data/orderedUsers.json');
        res.json(orderedUsers);
    });

    app.post('/adduser', (req, res) => {
        const newUser = { ...req.body, id: uuidv4() };
        const uniqueUsers = readFile('data/uniqueUsers.json');
        uniqueUsers.push(newUser);
        writeFile('data/uniqueUsers.json', uniqueUsers);
        res.status(201).send('User added');
    });

    app.put('/updateuser/:id', (req, res) => {
        const uniqueUsers = readFile('data/uniqueUsers.json');
        const updatedUsers = uniqueUsers.map(user => {
            if (user.id === req.params.id) {
                return { ...user, ...req.body };
            }
            return user;
        });
        writeFile('data/uniqueUsers.json', updatedUsers);
        res.send('User updated');
    });

    app.listen(3000, () => console.log('Server running on port 3000'));
};

module.exports = task5RESTfulAPI;
