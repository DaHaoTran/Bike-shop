-- Turn on support foreign key
PRAGMA foreign_keys = ON;

-- Create tables
CREATE TABLE types (
    Id INTERGER NOT NULL PRIMARY KEY,
    Name TEXT NOT NULL 
);

CREATE TABLE firms (
    Id INTERGER NOT NULL PRIMARY KEY,
    Name TEXT NOT NULL,
    Logo TEXT NOT NULL
);

CREATE TABLE bikes (
    Id INTERGER NOT NULL PRIMARY KEY,
    Name TEXT NOT NULL,
    Image TEXT NOT NULL,
    Price TEXT NOT NULL,
    TypeId INTERGER NOT NULL,
    FirmId INTERGER NOT NULL,
    FOREIGN KEY (TypeId) REFERENCES types (Id),
    FOREIGN KEY (FirmId) REFERENCES firms (Id)
);

CREATE TABLE bike_details (
    Id INTERGER NOT NULL PRIMARY KEY,
    Review TEXT NOT NULL,
    Technical TEXT NOT NULL,
    BikeId INTERGER NOT NULL,
    FOREIGN KEY (BikeId) REFERENCES bikes (Id)
);

CREATE TABLE bike_colors (
    Id INTERGER NOT NULL PRIMARY KEY,
    Name TEXT NOT NULL,
    Image TEXT NOT NULL,
    BikeId INTERGER NOT NULL,
    FOREIGN KEY (BikeId) REFERENCES bikes (Id)
);

-- Drop tables
DROP TABLE types;
DROP TABLE firms;
DROP TABLE bikes;
DROP TABLE bike_details;
DROP TABLE bike_colors;

-- Inserts
INSERT INTO types 
VALUES 
    (1, 'XE TAY GA'),
    (2, 'XE SỐ'),
    (3, 'XE ĐIỆN'),
    (4, 'XE THỂ THAO'),
    (5, 'PHỤ KIỆN');

-- Checks
SELECT * from types;
