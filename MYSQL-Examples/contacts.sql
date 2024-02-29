-- Create the database
CREATE DATABASE IF NOT EXISTS mycontactsdb;

-- Switch to the created database
USE mycontactsdb;

-- Create the contacts table
CREATE TABLE IF NOT EXISTS contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data into the contacts table
INSERT INTO contact (firstname, lastname, email) VALUES
('John', 'Doe', 'john.doe@example.com'),
('Jane', 'Smith', 'jane.smith@example.com'),
('Bob', 'Johnson', 'bob.johnson@example.com'), 
('Michael', 'Johnson', 'michael.johnson@example.com'),
('Emily', 'Davis', 'emily.davis@example.com'),
('Christopher', 'Miller', 'christopher.miller@example.com'),
('Sophia', 'Wilson', 'sophia.wilson@example.com'),
('Daniel', 'Moore', 'daniel.moore@example.com'),
('Olivia', 'Taylor', 'olivia.taylor@example.com'),
('Matthew', 'Anderson', 'matthew.anderson@example.com'),
('Emma', 'Clark', 'emma.clark@example.com'),
('David', 'Wright', 'david.wright@example.com'),
('Ethan', 'Brown', 'ethan.brown@example.com'),
('Isabella', 'Thomas', 'isabella.thomas@example.com'),
('James', 'Harris', 'james.harris@example.com'),
('Ava', 'Jackson', 'ava.jackson@example.com'),
('Mia', 'Martin', 'mia.martin@example.com'),
('Liam', 'Cooper', 'liam.cooper@example.com'),
('Harper', 'Lee', 'harper.lee@example.com'),
('Mason', 'Baker', 'mason.baker@example.com'),
('Grace', 'Turner', 'grace.turner@example.com'),
('Logan', 'Parker', 'logan.parker@example.com'),
('Ava', 'White', 'ava.white@example.com');

-- Display the table structure
DESCRIBE contact;