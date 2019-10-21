DROP DATABASE IF EXISTS car_db;
DROP DATABASE IF EXISTS user_db;

CREATE DATABASE car_db;
CREATE DATABASE user_db;

USE car_db;
USE user_db;


CREATE TABLE car (
  id INT NOT NULL AUTO_INCREMENT,
  model VARCHAR(255) NOT NULL,
  make VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  mileage INT NOT NULL,
  type VARCHAR(255) NOT NULL,
  color VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  image VARCHAR(500) NOT NULL,
  hidden BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);

CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    favorite_color VARCHAR(255), 
    favorite_type VARCHAR(255),
    favorite_make VARCHAR(255),
    authorized BOOLEAN DEFAULT FAlSE
)