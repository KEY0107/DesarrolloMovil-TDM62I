var mysql = require('mysql');

var connection = mysql.createConnection({
    //variables de conexion
    host :'localhost',
    user : 'root',
    password :'',
    database : 'ventas'



});

connection.connect(
    (err)=>{
        if(!err){
            console.log('conexion exitosa');
        }else{
            console.log('error de conexion');
        }
        
    }
);

module.exports=connection  

//connection.query("SELECT * FROM tblproductos ", function(err,resultado){
    //console.log(resultado)
//},)

//connection.end();