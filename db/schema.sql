DROP DATABASE IF EXISTS cupcakes_db;
-- Create the database wishes_db and specified it for use.
CREATE DATABASE cupcakes_db;
USE cupcakes_db;
-- Create the table wishes.
CREATE TABLE cupcake_table (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  cupcake_name varchar(255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT 0
);
-- Insert a set of records.
INSERT INTO cupcake_table (cupcake_name) VALUES ('Red Velvet');
INSERT INTO cupcake_table (cupcake_name) VALUES ('Birthday Cake');
INSERT INTO cupcake_table (cupcake_name) VALUES ('Smores');