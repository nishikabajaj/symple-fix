
// These consts import the required modules to connect node to SQL
const express = require('express'); // Imports Express.js, framework for creating a web server
const sql = require('mssql');    // Imports mssql library to interact with SQL Server database
const dotenv = require('dotenv'); // Used to load environment variables from your credentials.env file, keeping sensitive information secure and out of the source code

dotenv.config(); // Reads the .env file and makes its variables available in process.env

const app = express(); // Initializes the Express app, which handles HTTP requests and responses
const port = 3000; // The port number where the server will listen for incoming requests

// Configuration for SQL Server connection
// Because the SQL Server is authenticated through Windows Authentication instead of SQL Server Authentication,
// there are some different fields needed
const dbConfig = {

    server: process.env.DB_SERVER, // The server name or IP address where database is hosted (localhost = local SQL server), with instance SQLEXPRESS
    database: process.env.DB_NAME, // SQL Server database name
    
    // FOR WINDOWS AUTHENTICATION
    driver: 'msnodesqlv8', // Specifies this driver, telling mssql to use the native SQL Server driver that supports Windows Authentication

    /* FOR SQL SERVER AUTHENTICATION
    user: process.env.user,  // Server username
    password: '', // Server password
    port: 1433, // Default SQL Server port */

    options: {
        trustedConnection: true, // Enables Windows Authentication by using the currently logged-in user
        enableArithAbort: true, // Ensures the proper handling of arithmetic errors (e.g. division by 0)

        /* OR SQL SERVER AUTHENTICATION
        encrypt: false, // specifies whether to encrypt the connection; required for Azure or secure connections
        trustServerCertificate: true, // allows self-signed certificates for local setups
        port: 1433, */
    },
};


// Now connect to the SQL server --

// app.get: Defines a route that responds to GET requests to /api/data
app.get('/api/data', async (req, res) => { // (req, res) : REQuest and RESponse objects are passed to the callback function
  try {
      const pool = await mssql.connect(dbConfig); // Creates a connection pool to the SQL Server database using dbConfig configuration defined prior
      // The connection pool improves performance by reusing database connections
      const result = await pool.request().query('SELECT * FROM YourTable'); // pool.request() : Creates a request object for executing a query
                                        // .query() : Executes SQL query to fetch all rows from the specified table
      res.json(result.recordset); // result.recordset contains query results as an array of objects (each representing a row)
      // res.json : Sends query results as a JSON response to the client
    } catch (err) {
      console.error('Database query error:', err);
      res.status(500).send('Server error');
  }
});

// Start the server
app.listen(port, () => { // Starts the server on port 5000 and listens for incoming HTTP requests
    console.log('Server is running on http://localhost:${port}');
});