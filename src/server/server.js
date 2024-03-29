// Configuracion de servidor 
// const express = require('express');
import express from 'express';
import path from 'path';

//Funcion 
export const startServer = (options) =>{
    const {port, public_path = 'public'} =options
   
    const app = express()

    //Usar middlewares
    app.use(express.static(public_path)) //Constenido dentro de la ruta, sera estatico y disponible

    app.get('*', (req, res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
})

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})

}

//Se Omite exportar de esta manera ya que con Module solo se indicaria la palabra export
// module.exports = {
//     startServer
// }