DROP DATABASE IF EXISTS bonfire_db;

CREATE DATABASE bonfire_db;

USE bonfire_db;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(200),
  song_title varchar(200),
  song_artist varchar(200),
  song_album varchar(200),
  PRIMARY KEY (ID)
);

INSERT INTO users (name, song_title, song_artist, song_album)
VALUES ('Jonny', 'Danza Kuduro', 'Don Omar ft. Lucenzo', 'Don Omar Presents: Meet the Orphans');

INSERT INTO users(name, song_title, song_artist, song_album)
VALUES ('Carter', 'Lenny', 'Stevie Ray Vaughan & Double Trouble', 'Texas Flood');
