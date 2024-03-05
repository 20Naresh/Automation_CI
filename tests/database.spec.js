const mysql = require('mysql');

async function connectDB() {
    const connection = await mysql.createConnection({
        host: 'pc-uat.ctermfo176va.us-east-2.rds.amazonaws.com',
        user: 'support_user_qa',
        password: 'L8nU9T7qeJ97tfMb',
        database: 'elsevier_qa'
    });
    return connection;
}

async function selectQuery(connection) {
    const rows = await connection.query('SELECT * FROM article_edit_types');
    return rows;
}

async function disConnectDB(connection) {
    await connection.end();
}