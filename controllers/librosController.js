var conexion=require('../config/conexion');
var libro = require('../model/libro');
module.exports={
    index: function(req,res){
       libro.obtener(conexion,function(err,datos){
           console.log(datos);
           res.render('index', { title: 'CRUD Aplicacion' });
        });
        
    }
}