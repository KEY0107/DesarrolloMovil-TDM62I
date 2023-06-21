var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web1' });
});

/* GET home page. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros' });

});

/* crear */
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Nosotros' });

});

/* editar. */
router.get('/edit/:ID', function(req, res, next) {
  const ID = req.params.ID;
  connection.query('SELECT * FROM tblproductos WHERE ID=?', [ID], (err,resultado)=>{
    if(err){
      throw err;
    }else{
      res.render('edit', {user:resultado[0]})
    }
  })

});

/* borrar. */
router.get('/delete/:ID', (req,res)=>{
  const ID = req.params.ID;
  connection.query('DELETE FROM tblproductos WHERE ID = ?', [ID], (err,resultado)=>{
    if(err){
      throw err;
    }else{
      res.redirect('/productos');
    }
  })
})

const crud = require('../controllers/crud');
const connection = require('../conexion/conexion');
router.post('/save', crud.save);
router.post('/update',crud.update);


module.exports = router;
