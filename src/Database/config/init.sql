BEGIN;

DROP TABLE IF EXISTS book;

-- CREATE DATABASE bookdirectory;

CREATE TABLE book(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  author VARCHAR(255),
  edition INT,
  img VARCHAR(255),
  deleted boolean DEFAULT false
);

INSERT INTO book (name, author, edition, img)
 VALUES
  ('book1', 'author1', 1, 'img1'),
  ('book2', 'author2', 2, 'img2');

COMMIT;