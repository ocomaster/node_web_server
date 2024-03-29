//Configuracion manejo de variables de entorno   Dot-env
import env from 'dotenv';
import envvar from 'env-var';

env.config();


export const envs ={
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

//Modo de exportacion anterior a Es6, ahora se exporta con export
// module.exports={
//     envs
// }