const createuniqueUsers = require('./tasks/task1-createuniqueUsers');
const createCSVFile = require('./tasks/task2-createCSVFile');
const usersAphabeticalOrder = require('./tasks/task3-usersAlphabeticalOrder');
const countUsersReportsToMichael = require('./tasks/task4-countReportsToMichael');
const task5RESTfulAPI = require('./tasks/task5RESTfulAPI');

const runTasks = async () =>{
    await createuniqueUsers();
    await createCSVFile();
    await usersAphabeticalOrder();
    await countUsersReportsToMichael();
    console.log('Tasks completed. Starting the API server...');
    task5RESTfulAPI()
}

runTasks();