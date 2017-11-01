DROP DATABASE IF EXISTS bonfire_db;

CREATE DATABASE bonfire_db;

USE bonfire_db;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  NAME varchar(200),
  PRIMARY KEY (ID)
);

INSERT INTO users (name)
VALUES ('Jonny');

INSERT INTO users(name)
VALUES ('Carter');
