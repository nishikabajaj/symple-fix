// These consts import the required modules to connect node to SQL
const express = require('express'); // Imports Express.js, framework for creating a web server
const bodyParser = require('body-parser'); 
const sql = require('mssql'); // Imports mssql library to interact with SQL Server database
const cors = require('cors'); 
const dotenv = require('dotenv'); // Used to load environment variables from your credentials.env file, keeping sensitive information secure and out of the source code

dotenv.config(); // Reads the .env file and makes its variables available in process.env
const app = express();
app.use(bodyParser.json());
app.use(cors());

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

// Sample Route to Fetch Data
app.get('/api/data', async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM your_table');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database query error');
    }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});