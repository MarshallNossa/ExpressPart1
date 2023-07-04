import dotenv from "dotenv";
import express from "express";
import storageCampus from "./routes/campus.routes.js";

dotenv.config();
const appExpress = express();

//Se crea el servidor con el endpoint, exige los datos y la url "amigable para poder entrar"

//Entro al archivo env y tomo los datos de la variable my_config
const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


appExpress.use("/campus", storageCampus)