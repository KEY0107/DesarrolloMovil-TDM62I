var connection = require('../conexion/conexion');
exports.save = (req,res)=>{
    const titulo = req.body.titulo;
    const imagen = req.body.imagen;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    connection.query('INSERT INTO tblproductos SET ?',{titulo:titulo, imagen:imagen, descripcion:descripcion,precio:precio},(err,resultado)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
}

exports.update = (req, res)=>{
    const ID = req.body.ID;
    const titulo = req.body.titulo;
    const imagen = req.body.imagen;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    connection.query('UPDATE tblproductos SET ? WHERE ID = ?', [{titulo:titulo, imagen:imagen, descripcion:descripcion,precio:precio}, ID],(err,resultado)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
}