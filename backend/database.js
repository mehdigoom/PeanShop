var mysql = require('mysql');
  
var client= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peanshop',
  port: 	5000,
});
  
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const end = function end() {
  client.end();
};

const getUsers = function getUsers(clbk, id) {
  let sql;

  if (id) 
    sql = `SELECT * FROM users WHERE id = ?`;

  else 
    sql = `SELECT * FROM users`;
  
  const query = client.query(sql, [id], (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
  console.log("Last Query :", query.sql);
}

const getProducts = function getProducts(clbk) {
  let sql = "SELECT * FROM products";
  client.query(sql, (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
}

const getBasket = function getBasket(clbk, id) {
  let sql = "SELECT * FROM basket WHERE users_id = ?";
  client.query(sql, [id], (error, results, fields) => {
      
    if (error) return clbk(error, null);
    console.log(sql)
      return clbk(null, results);

  });
}

const displayCart = function displayCart(clbk) {
  let sql = "SELECT quantity, name, description, price, category, \
  picture, firstname, basket.id AS basket_id, products.id AS products_id, \
  users.id AS users_id FROM basket INNER JOIN products \
  ON products.id = basket.products_id INNER JOIN users \
  ON users.id = basket.users_id";
  client.query(sql, (error, results, fields) => {
      
    if (error) return clbk(error, null);
    console.log(sql)
      return clbk(null, results);
  });
}

const getProductsByCategory = function getProductsByCategory(clbk, category) {
  let sql = "SELECT * FROM products WHERE category = ?";
  client.query(sql, [category], (error, results) => {
    if (error) return clbk(error, null);
    return clbk(null, results);
  });
}
 
const delBasket = function delBasket(clbk, id) {
  let sql = "DELETE FROM basket WHERE users_id = ?";
  client.query(sql, [id], (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
}

const delProduct = function delProduct(clbk, id) {
  let sql = "DELETE FROM basket WHERE products_id = ?";
  client.query(sql, [id], (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
}

const addBasket = function addBasket(clbk, id,quantity,products_id,users_id) {
  console.log(id + " " + quantity+ " " +products_id+ " " +users_id )
  let sql = "INSERT INTO basket VALUES (?,?,?,?)";
  client.query(sql, [id,quantity,products_id,users_id], (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
}

const updateUser = function updateUser(clbk, user) {
  let sql = "UPDATE users SET firstname = ?, lastname = ?, email = ? WHERE id = ?"
  const payload = [user.firstname, user.lastname, user.email, user.id]
  client.query(sql, payload, function (err, res) {
    if (err) return clbk(err, null);
    return clbk(null, res)
  })
}

const loginUser = function loginUser(clbk, user) {

  let sql;

  sql = `SELECT * FROM users WHERE email = ? and password = ?`;

  const payload = [user.email, user.password]

  const query = client.query(sql, payload, (error, results) => {
      if (error) return clbk(error, null);
      return clbk(null, results[0]);
  });
  console.log("Last Query ==>", query.sql);
}

module.exports = {
  addBasket,
  getUsers,
  getProducts,
  getBasket,
  delBasket,
  updateUser,
  loginUser,
  delProduct,
  displayCart,
  getProductsByCategory,

};  