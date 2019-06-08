const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
let Mongo_url = process.env.MONGODB_URI;
 if (Mongo_url == null ||Mongo_url == "" ) {
   Mongo_url = 'mongodb://localhost/fetcher';
 }
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id : {type: Number},
  name: {type: String},
  full_name: {type: String},
  owner:{ login: {type:String}},
  watchers_count: {type: Number},
  created_at: {type: Date},
  updated_at: {type: Date},
  stargazers_count: {type: Number},
  html_url: {type: String},
  forks_count: {type: Number}

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data , cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.findOneAndUpdate({id: data.id}, {name: data.name, full_name: data.full_name,owner : {login: data.owner.login}, watchers_count: data.watchers_count, created_at: data.created_at,updated_at: data.updated_at,stargazers_count: data.stargazers_count, html_url: data.html_url,forks_count: data.forks_count}, {upsert: true}).exec((err, res)=> {
    if (err) {
      console.log(err);
    }
    cb('Repos inserted successfully');
  });
}
let findRepos = ( cb) => {
  Repo.find( ).limit(25).sort( { watchers_count: -1} ).exec((err, result) =>{
    if (err) {
      console.log(err);
    }
    cb(result);
  });

}



module.exports.save = save;
module.exports.findRepos = findRepos;
