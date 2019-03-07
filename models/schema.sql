DROP DATABASE IF EXISTS chat_db;
CREATE DATABASE chat_db;

USE chat_db;

CREATE TABLE Comments
(
    id INT NOT NULL AUTO_INCREMENT,
    Post TEXT(4294967295) NOT NULL,
    Author VARCHAR(255) NOT NULL,
    Categories VARCHAR(255) NOT NULL,
    ifComment Boolean NOT NULL, 
    -- checks if its a comment on a comment
    parentId INT, 
    -- the id of what they are commenting on
    PRIMARY KEY(id)
);

INSERT INTO Comments (Post,Author,Categories,Comment_Comment)
VALUE("Hello","Doe","Test_1",FALSE);

INSERT INTO Comments (Post,Author,Categories,Comment_Comment,Comment_id)
VALUE("HI","Jane","Test_1",TRUE,1);


INSERT INTO Comments (Post,Author,Categories,Comment_Comment)
VALUE("sup","John","Test_1",FALSE);

INSERT INTO Comments (Post,Author,Categories,Comment_Comment,Comment_id)
VALUE("Hi jane","Sam","Test_1",TRUE,2);

INSERT INTO Comments (Post,Author,Categories,Comment_Comment,Comment_id)
VALUE("Hello man","Doe","Test_1",True,1);