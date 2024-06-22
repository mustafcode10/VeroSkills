-- Drop tables if they already exist to ensure a clean slate
DROP TABLE IF EXISTS Training;
DROP TABLE IF EXISTS Phone;
DROP TABLE IF EXISTS Employee;

-- Create the Employee table with FirstName, LastName, and DateOfBirth as TEXT
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,  -- Primary key to uniquely identify each employee
    FirstName TEXT,              -- First name of the employee
    LastName TEXT,               -- Last name of the employee
    DateOfBirth DATE            -- Date of birth of the employee
);

-- Create the Phone table with a foreign key to the Employee table
CREATE TABLE Phone (
    PhoneID INT PRIMARY KEY,     -- Primary key to uniquely identify each phone number
    EmployeeID INT,              -- Foreign key to link to the Employee table
    PhoneNumber TEXT,            -- Phone number of the employee
    FOREIGN KEY (EmployeeID)     -- Defines EmployeeID as a foreign key
        REFERENCES Employee(EmployeeID) -- References the EmployeeID in the Employee table
);

-- Create the Training table with a foreign key to the Employee table
CREATE TABLE Training (
    TrainingID INT PRIMARY KEY,  -- Primary key to uniquely identify each training session
    EmployeeID INT,              -- Foreign key to link to the Employee table
    CreditHours INT,             -- Number of credit hours for the training session
    DateCompleted DATE,          -- Date when the training was completed
    FOREIGN KEY (EmployeeID)     -- Defines EmployeeID as a foreign key
        REFERENCES Employee(EmployeeID) -- References the EmployeeID in the Employee table
);

-- Insert data into the Employee table
INSERT INTO Employee (EmployeeID, FirstName, LastName, DateOfBirth)
VALUES
(1, 'John', 'Doe', '1990-01-15'),
(2, 'Jane', 'Smith', '1985-07-20'),
(3, 'Alice', 'Johnson', '1995-03-10'),
(4, 'Alex', 'Smith', '1995-03-10');

-- Insert data into the Phone table
INSERT INTO Phone (PhoneID, EmployeeID, PhoneNumber)
VALUES
(1, 1, '555-1234'),
(2, 2, '555-5678'),
(3, 3, '555-8765'),
(4, 1, '555-4321');  -- John Doe has two phone numbers

-- Insert data into the Training table
INSERT INTO Training (TrainingID, CreditHours, EmployeeID, DateCompleted)
VALUES
(1, 5, 1, '2024-05-20'),
(2, 3, 2, '2024-05-21'),
(3, 8, 3, '2024-05-22'),
(4, 2, 1, '2024-05-23'),
(5, 6, 2, '2024-05-24'),
(6, 6, 3, '2024-05-24');



-----------------------------------------
----------- FUNCTION --------------------
-----------------------------------------
-- Select all records from the Training table
SELECT * FROM Training;

-- Select all records from the Employee table
SELECT * FROM Employee;

-- Select all records from the Phone table
SELECT * FROM Phone;

-- Find the maximum value of CreditHours from the Training table
SELECT MAX(CreditHours) AS MaxCreditHours FROM Training;

-- Find the minimum value of CreditHours from the Training table
SELECT MIN(CreditHours) AS MinCreditHours FROM Training;

-- Calculate the average of CreditHours from the Training table
SELECT AVG(CreditHours) AS AvgCreditHours FROM Training;

-- Calculate the sum of CreditHours from the Training table
SELECT SUM(CreditHours) AS TotalCreditHours FROM Training;

-- Count total training records
SELECT COUNT(*) AS TotalTrainings FROM Training;

-----------------------------------------
----------- GROUP BY --------------------
-----------------------------------------

-- Group by EmployeeID and sum CreditHours
SELECT EmployeeID, SUM(CreditHours) AS TotalCreditHours FROM Training
GROUP BY EmployeeID;

-- Group by DateCompleted and sum CreditHours
SELECT DateCompleted, SUM(CreditHours) AS TotalCreditHours FROM Training
GROUP BY DateCompleted
ORDER BY TotalCreditHours DESC;

-- Group by DateCompleted and EmployeeID and sum CreditHours
SELECT DateCompleted, EmployeeID, SUM(CreditHours) AS TotalCreditHours FROM Training
GROUP BY DateCompleted, EmployeeID
ORDER BY TotalCreditHours DESC;


-----------------------------------------
----------- INNER JOIN ------------------
-----------------------------------------

-- Inner Join Employee with Phone to retrieve all employees with their phone numbers
SELECT e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth, p.PhoneNumber
FROM Employee e
INNER JOIN Phone p ON e.EmployeeID = p.EmployeeID;

-- Inner Join Employee with Training to retrieve all employees with their training records
SELECT e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth, t.TrainingID, t.CreditHours, t.DateCompleted
FROM Employee e
INNER JOIN Training t ON e.EmployeeID = t.EmployeeID;

-- Inner Join Employee, Phone, and Training to retrieve all employees with their phone numbers and training records
SELECT e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth, p.PhoneNumber, t.TrainingID, t.CreditHours, t.DateCompleted
FROM Employee e
INNER JOIN Phone p ON e.EmployeeID = p.EmployeeID
INNER JOIN Training t ON e.EmployeeID = t.EmployeeID;

-- Join Training with Employee and group by employee to get total credit hours each employee has completed
SELECT e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth, SUM(t.CreditHours) AS TotalCreditHours
FROM Employee e
INNER JOIN Training t ON e.EmployeeID = t.EmployeeID
GROUP BY e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth;

-----------------------------------------
----------- LEFT JOIN -------------------
-----------------------------------------

-- Left Join Employee with Phone to retrieve all employees with their phone numbers
SELECT e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth, p.PhoneNumber
FROM Employee e
LEFT JOIN Phone p ON e.EmployeeID = p.EmployeeID;

-- Left Join Employee with Training to retrieve all employees with their training records
SELECT e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth, t.TrainingID, t.CreditHours, t.DateCompleted
FROM Employee e
LEFT JOIN Training t ON e.EmployeeID = t.EmployeeID;

-- Left Join Employee, Phone, and Training to retrieve all employees with their phone numbers and training records
SELECT e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth, p.PhoneNumber, t.TrainingID, t.CreditHours, t.DateCompleted
FROM Employee e
LEFT JOIN Phone p ON e.EmployeeID = p.EmployeeID
LEFT JOIN Training t ON e.EmployeeID = t.EmployeeID;

-- Join Training with Employee and group by employee to get total credit hours each employee has completed
SELECT e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth, SUM(t.CreditHours) AS TotalCreditHours
FROM Employee e
LEFT JOIN Training t ON e.EmployeeID = t.EmployeeID
GROUP BY e.EmployeeID, e.FirstName, e.LastName, e.DateOfBirth;


-----------------------------------------
----------- SUBQUERIES ------------------
-----------------------------------------

-- Subqueries
-- Select all employees whose last name is in the list of last names of employees born on '1995-03-10'
SELECT * FROM Employee
WHERE LastName IN (SELECT LastName FROM Employee WHERE DateOfBirth = '1995-03-10');

-- Select first names and last names of employees who have completed training on '2024-05-24'
-- Order the results by first name and last name
SELECT FirstName, LastName FROM Employee
WHERE EmployeeID IN (SELECT EmployeeID FROM Training WHERE DateCompleted = '2024-05-24')
ORDER BY FirstName, LastName;

-- Select first names, last names, and total credit hours of employees who have completed training on '2024-05-24'
-- Group the results by first name and last name, and calculate the sum of credit hours for each employee
-- Order the results by first name and last name
SELECT FirstName, LastName, SUM(CreditHours) AS TotalCreditHours 
FROM Employee AS e
INNER JOIN Training AS t ON t.EmployeeID = e.EmployeeID
WHERE e.EmployeeID IN (SELECT EmployeeID FROM Training WHERE DateCompleted = '2024-05-24')
GROUP BY FirstName, LastName
ORDER BY FirstName, LastName;













 