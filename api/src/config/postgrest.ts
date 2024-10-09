import { PoolInterface } from "../interface/pool"

const {Pool} = require("pg")

const pool= new Pool({
    user:"postgres",
    host:"localhost",
    database:"myblog",
    password:"root123",
    port:5432,
})

pool.on('connect', () => {
    console.log('Conexión establecida correctamente a la base de datos');
});

pool.on('error', (err:any) => {
    console.error('Error de conexión a la base de datos:', err);
});

export {pool}