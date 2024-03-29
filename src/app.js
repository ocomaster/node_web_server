//Importar la configuracion de variables desde /config/env
import {envs}  from './config/env.js';
import { startServer } from './server/server.js';



const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

    // Funcion Agnóstica autoconvocada
    ( () =>{
        main()
    }) ()
    