
# **Sedibelo Technologies Backend Test**

## **Overview**

This project is a backend application developed as part of a technical assessment for Sedibelo Technologies. The application processes user data from a JSON file, performs several tasks including removing duplicates, generating ordered lists, and filtering data based on specific criteria. Additionally, it provides a RESTful API to interact with the processed data.

## **Tasks Implemented**

1. **Task 1: Create `uniqueUsers.json`**
   - Remove duplicate entries from `usersBackEnd.json`.
   - Add a unique ID to each entry.
   - Save the resulting data in `uniqueUsers.json`.

2. **Task 2: Generate `output.csv`**
   - Create a CSV file listing user names, surnames, and the number of times each combination is duplicated in `usersBackEnd.json`.

3. **Task 3: Create `orderedUsers.json`**
   - Generate an ordered list of users based on their names and save it in `orderedUsers.json`.

4. **Task 4: Filter and Count Users Reporting to Michael Phalane**
   - Identify users in the ENGINEERING department where Mechanics and Mechanic Assistants report to Michael Phalane and count them.
   - **Note:** You can run this task separately to see the output in the console.

5. **Task 5: Develop a RESTful API**
   - **`/uniqueUsers`**: Displays unique users created in Task 1.
   - **`/orderedUsers`**: Displays ordered users created in Task 3.
   - **`/adduser`**: Adds a new user entry into the `uniqueUsers.json` file.
   - **`/updateuser/:id`**: Updates user data in the `uniqueUsers.json` file.

## **Project Structure**

```plaintext
SedibeloTest/
│
├── data/
│   ├── usersBackEnd.json        # Input data file
│   ├── uniqueUsers.json         # Generated in Task 1
│   ├── output.csv               # Generated in Task 2
│   ├── orderedUsers.json        # Generated in Task 3
│
├── src/
│   ├── index.js                 # Main application entry point
│   ├── tasks/
│   │   ├── task1-createuniqueUsers.js   # Task 1 implementation
│   │   ├── task2-createCSVFile.js       # Task 2 implementation
│   │   ├── task3-usersAlphabeticalOrder.js   # Task 3 implementation
│   │   ├── task4-countReportsToMichael.js    # Task 4 implementation
│   │   ├── task5RESTfulAPI.js         # Task 5 implementation (API Endpoints)
│   │
│   ├── utils/
│       ├── fileUtils.js         # Utility functions for file operations
│       ├── dataProcessing.js    # Helper functions for data processing
│
├── package.json                 # Node.js dependencies and scripts
├── README.md                    # Project documentation
└── .gitignore                   # Git ignore file
```

## **Setup and Installation**

### **Prerequisites**

- Node.js (v14 or later)
- npm (Node Package Manager)

### **Installation**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Uyapfa/NodeBackEnd
   cd SedibeloTest
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

## **Running the Application**

### **Run All Tasks and Start the API Server**

To execute all tasks and start the API server, use the following command:

```bash
node src/index.js
```

This command will:
- Execute Task 1: Generate `uniqueUsers.json`.
- Execute Task 2: Generate `output.csv`.
- Execute Task 3: Generate `orderedUsers.json`.
- Execute Task 4: Filter users reporting to Michael Phalane.
- Start the API server for Task 5.

### **Run Task 4 Separately**

To run Task 4 separately and see the number of people reporting to Michael Phalane:

```bash
node src/tasks/task4-countReportsToMichael.js
```

- **Expected Output:**
  ```
  Total number of people who report to Michael Phalane: 14
  ```

### **Test the API Endpoints**

Once the server is running, you can interact with the API using tools like Postman or cURL.

- **GET `/uniqueUsers`**
  - URL: `http://localhost:3000/uniqueUsers`
  - Description: Fetches the list of unique users.

- **GET `/orderedUsers`**
  - URL: `http://localhost:3000/orderedUsers`
  - Description: Fetches the list of users in alphabetical order by name.

- **POST `/adduser`**
  - URL: `http://localhost:3000/adduser`
  - Description: Adds a new user to `uniqueUsers.json`.
  - Example Body (JSON):
    ```json
    {
      "name": "GLADWIN",
      "surname": "BUDA",
      "designation": "DRILL RIG OPERATOR",
      "department": "PRODUCTION"
    }
    ```

- **PUT `/updateuser/:id`**
  - URL: `http://localhost:3000/updateuser/:id`
  - Description: Updates user data in `uniqueUsers.json`.
  - Example Body (JSON):
    ```json
    {
      "name": "GLADWIN",
      "surname": "BUDA",
      "designation": "SENIOR DRILL RIG OPERATOR",
      "department": "PRODUCTION"
    }
    ```

### **Generated Files**

- **`uniqueUsers.json`**: Located in the `data/` directory.
- **`output.csv`**: Located in the `data/` directory.
- **`orderedUsers.json`**: Located in the `data/` directory.

## **Contact**

For any questions or issues, please contact **Uyapfa Thagana** at [uyapfa.clive@gmail.com].
