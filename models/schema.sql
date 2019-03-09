DROP DATABASE IF EXISTS chat_db;
CREATE DATABASE chat_db;



CREATE TABLE Comments
(
    id INT NOT NULL AUTO_INCREMENT,
    Post TEXT(4294967295) NOT NULL,
    Author VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    ifComment Boolean NOT NULL, 
    -- checks if its a comment on a comment
    parentId INT, 
    -- timestamp of posting
    postedAt DATETIME NOT NULL,
    -- the id of what they are commenting on
    PRIMARY KEY(id)
);

USE chat_db;
INSERT INTO Comments (post,Author,location,ifComment,createdAt, updatedAt)
VALUE("Hello","Doe","Test_1",FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Comments (post,Author,location,ifComment,parentId,createdAt, updatedAt)
VALUE("HI","Jane","Test_1",TRUE,1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Comments (post,Author,location,ifComment,createdAt, updatedAt)
VALUE("sup","John","Test_1",FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Comments (post,Author,location,ifComment,parentId,createdAt, updatedAt)
VALUE("Hi jane","Sam","Test_1",TRUE,2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Comments (post,Author,location,ifComment,parentId,createdAt, updatedAt)
VALUE("Hello man","Doe","Test_1",True,1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

USE chat_db;
SELECT * from Comments;

USE chat_db;

INSERT INTO Authors (text, name, email, password, userName,createdAt, updatedAt) VALUE ("Text?", "Josh LaRochelle", "bingojosh@hotmail.com", "oogieboogie", 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP));