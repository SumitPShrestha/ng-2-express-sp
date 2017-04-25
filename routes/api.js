/**
 * Created by sumit on 4/22/2017.
 */
var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test_app'
});


router.get('/', function (req, res, next) {
    connection.connect()

    connection.query('SELECT * from sp_users', function (err, rows, fields) {
        if (err) {
            console.log(err)
        }
        else
            res.json(rows)
    });
    connection.end()

});

router.post('/auth/login',function(req, res, next) {
    connection.connect()
    var credentials = req.body;
    if (credentials.username) {
        connection.query('SELECT * from sp_users WHERE username = '+credentials.username, function (err, rows, fields) {
            if (err) {
                console.log(err)
            }
            else
                res.json(rows)
        });
    }
    connection.end()
})
module.exports = router;