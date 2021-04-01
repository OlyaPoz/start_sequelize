CREATE TABLE users(
  id serial PRIMARY KEY,
  first_name varchar(128) NOT NULL,
  last_name varchar(128) NOT NULL,
  email varchar(128) NOT NULL,
  password_hash text NOT NULL,
  is_male boolean,
  birth_day date,
  created_at timestamp NOT NULL,
  updated_at timestamp NOT NULL
)