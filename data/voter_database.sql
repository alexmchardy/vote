create table voters (
    id integer PRIMARY KEY,
    name varchar(150),
    email varchar(150),
    enabled tinyint
);

create table options (
    id integer PRIMARY KEY,
    name varchar(150),
    description varchar(255)
);

create table elections (
    id integer PRIMARY KEY,
    name varchar(150),
    description varchar(255),
    start_time datetime,
    end_time datetime
);

create table election_option_map (
    id integer PRIMARY KEY,
    election_id integer NOT NULL,
    option_id integer NOT NULL
);

create table votes (
    id integer PRIMARY KEY,
    election_id integer NOT NULL,
    voter_id integer NOT NULL,
    option_id integer NOT NULL,
    rank tinyint NOT NULL
);

/* Populate Data */
insert into election_voter_options(election_id, voter_options_id) values (1, 3);
insert into election_voter_options(election_id, voter_options_id) values (1, 3);
insert into election_voter_options(election_id, voter_options_id) values (1, 3);
insert into election_voter_options(election_id, voter_options_id) values (1, 3);
insert into election_voter_options(election_id, voter_options_id) values (1, 3);


