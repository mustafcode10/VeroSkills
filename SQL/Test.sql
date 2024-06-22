-- Drop tables if they exist
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS Training;
DROP TABLE IF EXISTS Phone;

-- Create Employee table
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DateOfBirth DATE
);

-- Create Training table
CREATE TABLE Training (
    TrainingID INT,
    EmployeeID INT,
    CreditHours INT,
    DateCompleted DATE,
    FOREIGN KEY(EmployeeID) REFERENCES Employee(EmployeeID)
);

-- Create Phone table
CREATE TABLE Phone (
    PhoneID INT,
    EmployeeID INT,
    PhoneNumber VARCHAR(15),
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
INSERT INTO Training (TrainingID, EmployeeID, CreditHours, DateCompleted)
VALUES
(10, 1, 4, '2015-01-01'),
(11, 1, 2, '2015-02-02'),
(12, 2, 8, '2015-02-02');

-- Insert data into Phone table
INSERT INTO Phone (PhoneID, EmployeeID, PhoneNumber)
VALUES
(111, 1, '888-999-777'),
(112, 1, '777-888-666'),
(113, 2, '222-333-5555'),
(114, 5, NULL),
(115, 2, '222-333-5555');

----------------------------
--------- PART ONE ---------
----------------------------

-- Read Employee, Training, and Phone tables
SELECT * FROM Employee;
SELECT * FROM Training;
SELECT * FROM Phone;

-- Update Employee LastName
UPDATE Employee
SET LastName = 'Dirie'
WHERE LastName = 'Abtidon';

UPDATE Employee 
SET LastName = 'Mohamed'
WHERE EmployeeID = 4;

-- Select all employees to verify updates
SELECT * FROM Employee;

-- Remove duplicate LastNames
SELECT DISTINCT LastName FROM Employee;

-- Select employees with specific conditions
SELECT * FROM Employee
WHERE EmployeeID >= 2
AND LastName = 'Clark';

SELECT * FROM Employee
WHERE EmployeeID >= 3
OR LastName = 'Mohamed'
OR FirstName = 'John';

SELECT * FROM Employee
WHERE LastName LIKE '%n'
OR FirstName LIKE 'M%';

-- Select employees born on a specific date
SELECT * FROM Employee
WHERE DateOfBirth = '1990-01-01';

-- Group by DateCompleted and sum CreditHours
SELECT DateCompleted, SUM(CreditHours) AS TotalCreditHours
FROM Training
WHERE DateCompleted = '2015-02-02'
GROUP BY DateCompleted;

SELECT DateCompleted, EmployeeID, SUM(CreditHours) AS TotalCreditHours
FROM Training
WHERE DateCompleted = '2015-02-02'
GROUP BY DateCompleted, EmployeeID
ORDER BY TotalCreditHours DESC;

-- Inner join Employee and Training tables
SELECT e.EmployeeID, e.FirstName, e.LastName, t.TrainingID, t.CreditHours 
FROM Employee AS e
INNER JOIN Training AS t ON t.EmployeeID = e.EmployeeID;

-- Inner join Employee and Phone tables
SELECT e.EmployeeID, e.FirstName, e.LastName, p.PhoneID, p.PhoneNumber 
FROM Employee AS e
INNER JOIN Phone AS p ON p.EmployeeID = e.EmployeeID;

-- Left join Employee and Training tables
SELECT e.EmployeeID, e.FirstName, e.LastName, t.TrainingID, t.CreditHours 
FROM Employee AS e
LEFT JOIN Training AS t ON t.EmployeeID = e.EmployeeID;

SELECT e.EmployeeID, e.FirstName, e.LastName, p.PhoneID, p.PhoneNumber 
FROM Employee AS e
LEFT JOIN Phone AS p ON p.EmployeeID = e.EmployeeID;


---- Subqueries ----
SELECT FirstName, LastName, SUM(CreditHours) as TotalCreditHours FROM Employee e 
INNER JOIN Training as t ON e.EmployeeID = t.EmployeeID
WHERE e.EmployeeID IN(SELECT EmployeeID FROM Training WHERE DateCompleted = '2015-02-02' )
GROUP BY FirstName, LastName
ORDER BY FirstName, LastName







 





