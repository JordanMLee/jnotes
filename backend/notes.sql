CREATE TABLE users (
ID SERIAL PRIMARY KEy,
name varchar(30),
email VARCHAR(30)
       );

INSERT INTO users (name, email)
VALUES ('Jordan', 'jmlee2014@gmail.com'),('testUser','test@test.com');


CREATE TABLE notes (
ID SERIAL PRIMARY KEY,

title varchar(30),
noteText text
);

INSERT INTO notes(title, noteText) VALUES ('My first note','This is my first note. Welcome to jnotes');