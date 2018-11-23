const express = require('express');
const router = express.Router();
const db = require('../../models/dbconnection');
const moment = require('moment');

router.get('/', (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.json({posts: result});
        }
    });
})
router.post('/', (req, res) => {
    console.log('Req made to server.');
    let postcreatedtime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    let post = {title: req.body.title, content: req.body.description, createdtime: postcreatedtime};
    let sql = 'INSERT INTO posts SET ?';
    db.query(sql, post, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
});
module.exports = router;