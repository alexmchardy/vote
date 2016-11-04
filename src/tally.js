var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

function tallyResults(election_id, done){
  var votes = {};

  db.each("SELECT voter_id, option_id, rank FROM votes WHERE election_id = " + election_id, function(err, row){
    if(!votes[row.voter_id])
      votes[row.voter_id] = [];
    votes[row.voter_id].push({option_id: row.option_id, rank: row.rank});
  }, function(err){
    Object.keys(votes).forEach(function(key, index){
      votes[key].sort(function(a, b){
        if(a.rank > b.rank)
          return 1;
        return -1;
      });

      votes[key] = votes[key].map(function(obj){
        return obj.option_id;
      });
    });

    done(votes);
  })
}

db.serialize(function() {
  db.run("create table votes (id int PRIMARY KEY NOT NULL, election_id int NOT NULL, voter_id int NOT NULL, option_id int NOT NULL, rank tinyint NOT NULL)");
  db.run("INSERT INTO votes (id, election_id, voter_id, option_id, rank) VALUES (1, 1, 1, 6, 3)");
  db.run("INSERT INTO votes (id, election_id, voter_id, option_id, rank) VALUES (2, 1, 1, 4, 1)");
  db.run("INSERT INTO votes (id, election_id, voter_id, option_id, rank) VALUES (3, 1, 2, 6, 2)");
  db.run("INSERT INTO votes (id, election_id, voter_id, option_id, rank) VALUES (4, 1, 1, 5, 2)");
  db.run("INSERT INTO votes (id, election_id, voter_id, option_id, rank) VALUES (5, 1, 2, 4, 1)");
  db.run("INSERT INTO votes (id, election_id, voter_id, option_id, rank) VALUES (6, 1, 3, 5, 2)");
  db.run("INSERT INTO votes (id, election_id, voter_id, option_id, rank) VALUES (7, 1, 2, 5, 3)");
  db.run("INSERT INTO votes (id, election_id, voter_id, option_id, rank) VALUES (8, 1, 3, 6, 1)");
  db.run("INSERT INTO votes (id, election_id, voter_id, option_id, rank) VALUES (9, 1, 3, 4, 3)");

  tallyResults(1, function(votes){
    console.log('votes', votes);
  });
});

db.close();
