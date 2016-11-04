create table voters (
    id integer PRIMARY KEY,
    name varchar(150),
    email_address varchar(150),
    status tinyint
);

create table voter_options (
    id integer PRIMARY KEY,
    name varchar(150),
    description varchar(255)
);

create table election (
    id integer PRIMARY KEY,
    name varchar(150),
    description varchar(255),
    start_time datetime,
    end_time datetime
);

create table election_voter_options (
    id integer PRIMARY KEY,
    election_id integer NOT NULL,
    voter_options_id integer NOT NULL
);

create table election_voter_options (
    id integer PRIMARY KEY,
    election_id integer NOT NULL,
    voter_options_id integer NOT NULL 
);

create table election_votes (
    id integer PRIMARY KEY,
    election_id integer NOT NULL,
    voter_id integer NOT NULL,
    voter_option_id integer NOT NULL,
    rank tinyint NOT NULL
);


/* Populate Data */
insert into 
insert into election_voter_options(election_id, voter_options_id) values (1, 3);
insert into election_voter_options(election_id, voter_options_id) values (1, 3);
insert into election_voter_options(election_id, voter_options_id) values (1, 3);
insert into election_voter_options(election_id, voter_options_id) values (1, 3);
insert into election_voter_options(election_id, voter_options_id) values (1, 3);


