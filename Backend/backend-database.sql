drop table user;

CREATE TABLE user (
username VARCHAR(256) NOT NULL,
password VARCHAR(256) NOT NULL
);

insert into user(username,password) values('admin',md5('admin'));