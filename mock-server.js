const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function resolveJsonFile(filePath) {
    return path.join(__dirname, filePath + '.json');
}

app.use(express.static(path.join(__dirname, './mock/images')));

// 设置跨域访问
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, ACCESS-TOKEN, timestamp, token, sign, menuAlias, menuType'
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/mock/*', (req, res) => {
    // 文件地址
    const filePath = resolveJsonFile(req.baseUrl);
    // 判断文件是否存在
    fs.exists(filePath, (exists) => {
        if (!exists) {
            res.json({ code: -1, message: '本地mock---请求接口不存在!!!' });
        } else {
            // 读取文件
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.json({ code: -1, message: '本地mock---请求接口不存在!!!' });
                } else {
                    res.send(data);
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log('server start at ' + port);
});

module.exports = app;
