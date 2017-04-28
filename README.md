## Instructions

### Installing and configuring MySQL

Install MySQL(Windows) https://dev.mysql.com/downloads/installer/

**Open MySQL Command prompt**
1. Create Database - CREATE DATABASE inventory;
2. create Table - CREATE TABLE products (id INT NOT NULL AUTO_INCREMENT, code VARCHAR(100), name VARCHAR(100), price FLOAT(30), quantity INT(50), PRIMARY KEY (id));

### Other basic commands for MYSQL

- List all databases: **show databases;**
- Select Database: **USE Databse_name;**
- Find which database is in use: **select datase();**
- show all tables: **show tables;**
- See table structure: **describe Table_Name;**

### Installing project files

1. Clone the repo: https://github.com/aneeq-musa/Node-Express.git
2. Install packages: `npm install`
3. Start the server: `gulp`
4. Visit in browser at: `http://localhost:8080`
