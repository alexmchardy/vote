/*
VOTERS
id
name
email address
status


VOTER_OPTIONS
-
id
name
description


ELECTION
-
id
name
description
start
stop


ELECTION_VOTER_OPTIONS
-
election_id
voter_option_id


ELECTION_VOTES
-
id
election_id
voter_id
voter_option_id
rank
*/

create table voters (
    id int PRIMARY KEY NOT NULL,
    name varchar(150),
    email_address varchar(150),
    status tinyint
);

create table voter_options (
    id int PRIMARY KEY NOT NULL,
    name varchar(150),
    description varchar(255)
);

create table election (
    id int PRIMARY KEY NOT NULL,
    name varchar(150),
    description varchar(255),
    start_time datetime,
    end_time datetime
);

create table election_voter_options (
    id int PRIMARY KEY NOT NULL,
    election_id int NOT NULL,
    voter_options_id int NOT NULL
);

create table election_voter_options (
    id int PRIMARY KEY NOT NULL,
    election_id int NOT NULL,
    voter_options_id int NOT NULL 
);

create table election_votes (
    id int PRIMARY KEY NOT NULL,
    election_id int NOT NULL,
    voter_id int NOT NULL,
    voter_option_id int NOT NULL,
    rank tinyint NOT NULL
);
