var mysql = require("mysql");
var con= mysql.createConnection({hosthost: 'localhost',user: 'root',password:'',database: 'biblioteca'});

con.connect(
  (err)=>{
      if(!err){
          console.log('Conexion establecida');
      }else{
        console.log('Error de Conexion');
      }
  }
);
module.exports= con;