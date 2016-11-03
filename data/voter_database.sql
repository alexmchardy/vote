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
    email varchar(150),
    enabled tinyint
);

create table options (
    id int PRIMARY KEY NOT NULL,
    name varchar(150),
    description varchar(255)
);

create table elections (
    id int PRIMARY KEY NOT NULL,
    name varchar(150),
    description varchar(255),
    start_time datetime,
    end_time datetime
);

create table election_option_map (
    id int PRIMARY KEY NOT NULL,
    election_id int NOT NULL,
    option_id int NOT NULL
);

create table votes (
    id int PRIMARY KEY NOT NULL,
    election_id int NOT NULL,
    voter_id int NOT NULL,
    option_id int NOT NULL,
    rank tinyint NOT NULL
);
