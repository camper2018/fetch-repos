const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id : {type: Number},
  name: {type: String},
  full_name: {type: String},
  owner:{ login: {type:String}, id: {type:Number}, avatar_url: {tpye: String}, url: {type: String}, starred_url:{type:String}, repos_url: {type:String},type:{type : String}},
  watchers_count: {type: Number},
  created_at: {type: Date},
  updated_at: {type: Date},
  stargazers_count: {type: Number}

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data ) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // var Repo = new Repo(data);
  // Repo.save((err, result) => {
  //   if (err)  {
  //     return console.error(err);
  //   }
  //   return result;

  // });
  Repo.create(data).then((result)=> {
    console.log('success', result);
  });

}

module.exports.save = save;