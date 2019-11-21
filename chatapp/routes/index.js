'use strict';

const express = require('express');
const router = express.Router();

// ログイン画面の表示
router.get('/', function(request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', function(request, response, next) {
    console.log('ユーザ名：' + request.body.userName);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    response.render('room', { userName: 'request.body.userName' });
=======
    response.render('room', { userName: request.body.userName });
>>>>>>> Stashed changes
=======
    response.render('room', { userName: request.body.userName });
>>>>>>> Stashed changes
});

module.exports = router;
