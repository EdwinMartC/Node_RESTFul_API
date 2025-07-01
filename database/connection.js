const mysql = require('mysql2');

const db  = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'Nuevoamanecer',
        database: 'courses',
    }
);

db.connect((error) =>{
    if(error){
        throw error
    }
    console.log("Conexión Exitosa")
});

module.exports = db;