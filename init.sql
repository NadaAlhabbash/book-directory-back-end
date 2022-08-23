BEGIN;

DROP TABLE IF EXISTS book;

-- CREATE DATABASE bookdirectory;

CREATE TABLE book(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  author VARCHAR(255),
  img VARCHAR(255)
);

INSERT INTO book (name, author, img)
 VALUES
  ('book1', 'author1', 'img1'),
  ('book2', 'author2', 'img2');

COMMIT;