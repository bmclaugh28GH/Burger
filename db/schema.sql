-- **********************************************
-- DDL 
-- **********************************************

drop database if exists burgers_db;

create database burgers_db; 

use burgers_db; 

create table burgers 
(id            integer not null auto_increment,
burger_name    varchar (128) not null,
devoured       boolean,
--
primary key (id)); 

