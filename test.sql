CREATE TABLE fligths (
	flight_id serial primary key,
	airlane_name varchar(100) not null,
	airlane_code varchar(10) not null,
	departure timestamp UNIQUE not null,
	seats integer not null
)

-- FOREING KEY
select flight_id, airlane_name, airlane_code, departure,seats from fligths where airlane_code = 'El Al';

insert into fligths (airlane_name,airlane_code,departure,seats)
values  ('KLM','KLM',now(),404),
('Air Canada','AC', now(),530)
('Jet Blue','JB',now(),245)

update fligths set seats = '350',airlane_code = 'EJT' where flight_id = 9;

delete from fligths where flight_id = 5
