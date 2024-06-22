-- Drop tables if they exist
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS Training;
DROP TABLE IF EXISTS Phone;

-- Create Employee table
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DateOfBirth DATE  -- Corrected: Changed to DATE
);

-- Create Training table
CREATE TABLE Training (
    TrainingID INT,
    EmployeeID INT,
    CreditHours INT,
    DateCompleted DATE,  -- Corrected: Changed to DATE and fixed column name
    FOREIGN KEY(EmployeeID) REFERENCES Employee(EmployeeID)
);

-- Create Phone table
CREATE TABLE Phone (
    PhoneID INT,
    EmployeeID INT,
    PhoneNumber VARCHAR(15),  -- Corrected: Changed to VARCHAR
    FOREIGN KEY(EmployeeID) REFERENCES Employee(EmployeeID)
);

-- Insert data into Employee table
INSERT INTO Employee (EmployeeID, FirstName, LastName, DateOfBirth)
VALUES
(1, 'Mustaf', 'Abtidon', '1996-01-01'),
(2, 'John', 'Doe', '1996-01-01'),
(3, 'Bob', 'Brown', '1995-03-09'),
(4, 'Charlie', 'Ahmed', '1990-01-01'),
(5, 'Emily', 'Clark', '1990-01-01'),
(6, 'Alex', 'Clark', NULL);

-- Insert data into Training table
INSERT INTO Training (TrainingID, EmployeeID, CreditHours, DateCompleted)  -- Corrected: Column name is now correct
VALUES
(10, 1, 4, '2015-01-01'),
(11, 1, 2, '2015-02-02'),
(12, 2, 8, '2015-02-02');

-- Insert data into Phone table
INSERT INTO Phone (PhoneID, EmployeeID, PhoneNumber)
VALUES
(111, 1, '888-999-777'),  -- Corrected: Now VARCHAR
(112, 1, '777-888-666'),  -- Corrected: Now VARCHAR
(113, 2, '222-333-5555'),  -- Corrected: Now VARCHAR
(114, 5, NULL),
(115, 2, '222-333-5555');  -- Corrected: Now VARCHAR

----------------------------
--------- PART ONE ---------
----------------------------

-- Read Employee table
SELECT * FROM Employee;
SELECT * FROM Training;
SELECT * FROM Phone;

-- Update Employee last name
UPDATE Employee
SET LastName = 'Mohamed'
WHERE EmployeeID = 4;

-- Select Employees with EmployeeID > 2 and LastName = 'Mohamed'
SELECT * FROM Employee
WHERE EmployeeID > 2
AND LastName = 'Mohamed';

-- Select Employees where LastName ends with 'n' and FirstName starts with 'M'
SELECT * FROM Employee
WHERE LastName LIKE '%n'
AND FirstName LIKE 'M%';  -- Corrected: Match case

-- Select Employees where DateOfBirth is '1996-01-01'
SELECT * FROM Employee
WHERE DateOfBirth = '1996-01-01';

-- Select Employees where DateOfBirth is NULL
SELECT * FROM Employee
WHERE DateOfBirth IS NULL;

-- Select Phone where PhoneNumber is NULL
SELECT * FROM Phone
WHERE PhoneNumber IS NULL;

-- Select Employees where LastName is in a specific set
SELECT * FROM Employee
WHERE LastName IN ('Abtidon', 'Doe');

-- Select Employees where EmployeeID >= 1 and DateOfBirth >= '1996-01-01' and LastName = 'Abtidon'
SELECT * FROM Employee
WHERE EmployeeID >= 1
AND DateOfBirth >= '1996-01-01'
AND LastName = 'Abtidon';

-- Update PhoneNumber for a specific PhoneID
UPDATE Phone
SET PhoneNumber = '555-555-555'
WHERE PhoneID = 1;

-- Update Employee LastName from 'Abtidon' to 'Dirie'
UPDATE Employee
SET LastName = 'Dirie'
WHERE LastName = 'Abtidon';

-- Remove duplicate
SELECT DISTINCT LastName FROM Employee
ORDER BY LastName;

----------------------------
--------- PART TWO ---------
----------------------------

-- Aggregate functions on Training table
SELECT MAX(CreditHours) AS MaxCreditHours FROM Training;
SELECT MIN(CreditHours) AS MinCreditHours FROM Training;
SELECT AVG(CreditHours) AS AverageCreditHours FROM Training;
SELECT SUM(CreditHours) AS TotalCreditHours FROM Training;
SELECT COUNT(*) AS TotalTrainings FROM Training;

-- Group by queries
SELECT DateCompleted, SUM(CreditHours) AS TotalCreditHours 
FROM Training
GROUP BY DateCompleted
ORDER BY TotalCreditHours DESC;

SELECT DateCompleted, EmployeeID, SUM(CreditHours) AS TotalCreditHours 
FROM Training
GROUP BY DateCompleted, EmployeeID
ORDER BY DateCompleted, EmployeeID, TotalCreditHours DESC;

-- INNER JOIN examples
SELECT e.EmployeeID, e.FirstName, e.LastName, p.PhoneID, p.PhoneNumber 
FROM Employee e
INNER JOIN Phone p ON e.EmployeeID = p.EmployeeID
ORDER BY p.PhoneID DESC;  -- Corrected: Removed unnecessary GROUP BY

SELECT e.EmployeeID, e.FirstName, e.LastName, p.PhoneID, p.PhoneNumber, 
t.TrainingID, t.CreditHours, t.DateCompleted 
FROM Employee e
INNER JOIN Phone p ON e.EmployeeID = p.EmployeeID
INNER JOIN Training t ON e.EmployeeID = t.EmployeeID  -- Corrected: Fixed ON clause
ORDER BY p.PhoneID DESC;  -- Corrected: Removed unnecessary GROUP BY

-- LEFT JOIN examples
SELECT e.EmployeeID, e.FirstName, e.LastName, p.PhoneID, p.PhoneNumber 
FROM Employee e
LEFT JOIN Phone p ON e.EmployeeID = p.EmployeeID
ORDER BY p.PhoneID, e.EmployeeID;  -- Corrected: Removed unnecessary GROUP BY

SELECT e.EmployeeID, e.FirstName, e.LastName, p.PhoneID, p.PhoneNumber, 
t.TrainingID, t.CreditHours, t.DateCompleted 
FROM Employee e
LEFT JOIN Phone p ON e.EmployeeID = p.EmployeeID
LEFT JOIN Training t ON e.EmployeeID = t.EmployeeID
ORDER BY p.PhoneID, e.EmployeeID;  -- Corrected: Removed unnecessary GROUP BY

--- Subqueries -- Select all employees whose last name is in the list of last names of employees born on '2015-02-02''

SELECT * FROM Employee
WHERE LastName IN (SELECT LastName FROM Employee WHERE DateOfBirth = '1990-01-01')



SELECT FirstName, LastName, SUM(CreditHours) as TotalCreditHours from Employee e
INNER JOIN Training as t on e.EmployeeID = t.EmployeeID
WHERE e.EmployeeID IN(SELECT EmployeeID FROM Training 
WHERE DateCompleted = '2015-02-02')
GROUP BY FirstName, LastName
ORDER BY FirstName, LastName;




-- SELECT e.FirstName, e.LastName, SUM(t.CreditHours) AS TotalCreditHours
-- FROM Employee e
-- INNER JOIN Training t ON e.EmployeeID = t.EmployeeID
-- WHERE e.EmployeeID IN (SELECT EmployeeID FROM Training WHERE DateCompleted = '2015-02-02')
-- GROUP BY e.FirstName, e.LastName
-- ORDER BY e.FirstName, e.LastName;

























