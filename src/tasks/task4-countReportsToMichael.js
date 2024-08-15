const fs = require('fs');

const uniqueUsers = fs.readFileSync('data/uniqueUsers.json', 'utf-8');
const users = JSON.parse(uniqueUsers);

function countUsersReportsToMichael() {
    const engineeringReports = users.filter(user => 
        user.department === 'ENGINEERING' &&
        (user.designation === 'MECHANIC' || user.designation === 'MECHANIC ASSISTANT')
    );
    
    return engineeringReports.length;
}

const count = countUsersReportsToMichael();
console.log(`Total number of people who report to Michael Phalane: ${count}`);

module.exports = countUsersReportsToMichael;
