// Configuracion de servidor 
const express = require('express');
const path = require('path')

//Funcion 
const startServer = (options) =>{
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

module.exports = {
    startServer
}