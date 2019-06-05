const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github');
const save = require('../database/index').save;
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/repos', function (req, res) {
  let username = req.body.username;
  getReposByUsername.getReposByUsername(username, (data)=> {
    //console.log(JSON.parse(data));
    var result = save(JSON.parse(data));
      console.log(result);

  });
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

});

app.get('/repos', function (req, res) {

  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

