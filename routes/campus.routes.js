import { Router } from "express";
import mysql from "mysql2";

const storageCampus = Router();
let con = undefined;

storageCampus.use((req, res, next) => {
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    //Es como crear la conexion
    con = mysql.createPool(myConfig);
    //Es parecido a un await, cuando ejecute el codigo pasa a traer el dato
    next();
})

storageCampus.get("/traerData", (req, res) => {
    //Conexión a la base de datos mandando la query y mostrando una respuesta que es lo que trae de la base de datos
    con.query(
        /* sql */ `SELECT * FROM countries`,
        (err, data, fil) => {
            res.send(JSON.stringify(data))
        }
    )
})

export default storageCampus;