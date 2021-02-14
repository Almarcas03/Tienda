-- to create a new database
CREATE DATABASE Tienda;

-- to use database
use Tienda;

-- creating a new table
CREATE TABLE Usuarios (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  contrasena INT(15)
);

-- to show all tables
show tables;

-- to describe table
describe Usuario;

-- to create a new database
-- CREATE DATABASE Factura;

-- to use database
-- use Factura;

-- creating a new table
CREATE TABLE Carro (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  precio INT(15)
);



-- to describe table
describe Factura;

CREATE TABLE client (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe client;