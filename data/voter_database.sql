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
insert into voters (name, email, enabled) values
    ('Alex McHardy', 'amchardy@shutterstock.com', 1),
    ('Jesse Weaver', 'jweaver@shutterstock.com', 1),
    ('Daniel Berry', 'dberry@shutterstock.com', 1),
    ('Nick Winn', 'nwinn@shutterstock.com', 1);

insert into elections (name, description) values ('Lunch Vote', 'Friday, November 11th');

insert into options (name, description) values 
    ('Lucilles', 'Best cajun food this side of the missisippi'),
    ('Yazoo BBQ', 'BBQ to blow your mind'),
    ('Teds Cheesesteaks', 'Heartburn for days'),
    ('Maggianos', 'always have a contingency plan');


insert into election_option_map(election_id, option_id) values (1, 1);
insert into election_option_map(election_id, option_id) values (1, 2);
insert into election_option_map(election_id, option_id) values (1, 3);
insert into election_option_map(election_id, option_id) values (1, 4);

