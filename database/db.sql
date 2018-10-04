CREATE DATABASE crud_node_mysql;

-- using the database 
use crud_node_mysql; 

--creating a table
CREATE TABLE customer (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	address VARCHAR (100) NOT NULL,
	phone VARCHAR (15)
);

--show all tables

SHOW TABLES;

--describe tables 
describe customer; 

