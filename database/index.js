const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

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
  git_url: {type: String},
  forks_count: {type: Number}

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data , cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.findOneAndUpdate({id: data.id}, {name: data.name, full_name: data.full_name,owner : {login: data.owner.login}, watchers_count: data.watchers_count, created_at: data.created_at,updated_at: data.updated_at,stargazers_count: data.stargazers_count, git_url: data.git_url,forks_count: data.forks_count}, {upsert: true}).exec((err, res)=> {
    if (err) {
      console.log(err);
    }
    cb('Repos inserted successfully');
  });

}



module.exports.save = save;
//module.exports.update = update;