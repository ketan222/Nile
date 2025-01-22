const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

const port = process.env.PORT;
const dataBase = process.env.DATABASE;
const password = process.env.DATABASE_PASSWORD;

mongoose.connect(dataBase).then(
    console.log("DATABASE CONNECTION SUCCESSFULL!")
)

// console.log(port + " " + password);
const app = require('./App');

const server = app.listen(port, () => {
    console.log("Server running...!")
}) 

process.on('uncaughtException', (err)=>{
    console.log("UncaughtException!💥");
    console.log(err);
    server.close(()=>{
        console.log("Shutting Down the Server...!");
        process.exit(1);
    })
} )
