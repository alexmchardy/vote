var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

function tallyResults(election_id, done){
  var votes = {};
  options = new Set();

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
        options.add(obj.option_id);
        return obj.option_id;
      });
    });

    var matrix_map = Array.from(options);

    var pair_matrix = [];
    for(var i=0; i<matrix_map.length; ++i){
      var matrix_row = [];
      for(var j=0; j<matrix_map.length; ++j)
        matrix_row.push(0);
      pair_matrix.push(matrix_row);
    }

    Object.keys(votes).forEach(function(key, index){
      for(var i=0; i<matrix_map.length; ++i){
        for(var j=i+1; j<matrix_map.length; ++j){
          pos_i = votes[key].indexOf(matrix_map[i]);
          pos_j = votes[key].indexOf(matrix_map[j]);

          if(pos_i == -1){
            if(pos_j != -1)
              pair_matrix[j][i] += 1;
          }else{
            if(pos_j == -1)
              pair_matrix[i][j] += 1;
            else if(pos_i < pos_j)
              pair_matrix[i][j] += 1;
            else
              pair_matrix[j][i] += 1;
          }
        }
      }
    });

    done(pair_matrix);
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

  tallyResults(1, function(output){
    console.log(output);
  });
});

db.close();
