DROP DATABASE IF EXISTS chat_db;
CREATE DATABASE chat_db;


USE chat_db;
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
    postId INT NOT NULL,
    -- the id of what they are commenting on
    PRIMARY KEY(id)
);

USE chat_db;
INSERT INTO Comments (post,Author,location,ifComment,title,createdAt, updatedAt, postId)
VALUE("Hello","Doe","Memes",FALSE, "hi there", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Comments (post,Author,location,ifComment,parentId,createdAt, updatedAt, postId)
VALUE("HI","Jane","Games",TRUE,1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Comments (post,Author,location,ifComment,title,createdAt, updatedAt, postId)
VALUE("sup","John","School",FALSE, "wyd bruh", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Comments (post,Author,location,ifComment,parentId,createdAt, updatedAt, postId)
VALUE("Hi jane","Sam","Random",TRUE,2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Comments (post,Author,location,ifComment,parentId,createdAt, updatedAt, postId)
VALUE("Hello man","Doe","German's Baking",True,1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

USE chat_db;

SELECT * from Comments;


USE chat_db;
INSERT INTO categories (categories, createdAt, updatedAt) VALUE ("Memes", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO categories (categories, createdAt, updatedAt) VALUE ("Games", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO categories (categories, createdAt, updatedAt) VALUE ("School", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO categories (categories, createdAt, updatedAt) VALUE ("Random", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO categories (categories, createdAt, updatedAt) VALUE ("German's Baking", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Authors (text, name, email, password, userName,createdAt, updatedAt) VALUE ("Text?", "Josh LaRochelle", "bingojosh@hotmail.com", "oogieboogie", 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP));