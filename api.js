var express = require('express');
var app = express();
var Db = require('./dboperations');
var bodyParser = require('body-parser');
var cors = require('cors');
const dboperations = require('./dboperations');
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
});


app.get('/words', (request, response) => {
    Db.getWords().then((data) => {
        console.log(data);
        response.json(data[0]);
    })
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('WordList API is runnning at ' + port);