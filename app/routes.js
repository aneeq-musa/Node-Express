// require express
var express = require('express');
var path = require('path');
var mysql = require('mysql');
// create our router object
var router = express.Router();


// export our router
module.exports = router;

///////////////////////////////////DATABASE CONNECTION///////////////////////////////////////////
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'inventory',
    });

//////////////////////////////////DISPLAY DATA //////////////////////////////////////////////////
router.get('/about', function(req, res) {
var query = 'select * from products'; //query goes here
connection.query(query, function(err, rows) {
    if (err) {
        console.log(err);
        }

     console.log(rows);
     res.render('pages/about', { rows: rows});
});
});

////////////////////////////////////INSERT DATA ////////////////////////////////////////////////
router.post('/about', function(req, res){

var code_add = req.body.data.code;
var name_add = req.body.data.name;
var price_add = req.body.data.price;
var quantity_add = req.body.data.quantity;

query_add = "INSERT INTO products(code,name,price,quantity) VALUES (?,?,?,?)";

   var values = [code_add, name_add, price_add, quantity_add];
   query_add = mysql.format(query_add, values);
   connection.query(query_add)
   res.redirect('/about');
});

///////////////////////////////////DELETE DATA ///////////////////////////////////////////////

router.post('/delete', function(req, res){

var product_id = req.body.data_new;
query_delete = "DELETE FROM products WHERE id=?";
var values = [product_id];
   query_delete = mysql.format(query_delete, values);
   connection.query(query_delete)
   res.redirect('/about');
   console.log("went inside");
});

//////////////////////////////////UPDATE DATA /////////////////////////////////////////////////

router.post('/update', function(req,res){

var id          = req.body.data.id_update;
var set_code    = req.body.data.code_update;
var set_name   = req.body.data.name_update;
var set_price   = req.body.data.price_update;
var set_quantity = req.body.data.quantity_update;
console.log(set_name);
console.log(id);
query_update = "UPDATE products SET code = ?,name = ?,price = ?,quantity = ? WHERE id = ?";
var values = [set_code,set_name,set_price,set_quantity,id];
query_update = mysql.format(query_update,values);
connection.query(query_update)
res.redirect('/about');
});


//////////////////////////////////DATABASE END /////////////////////////////////

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});
