-- Drop existing tables if they exist
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

-- Read data from Employee table
SELECT * FROM Employee;

-- Read data from Training table
SELECT * FROM Training;

-- Read data from Phone table
SELECT * FROM Phone;

-- Perform an inner join between Employee and Training tables
SELECT e.FirstName, e.LastName 
FROM Employee AS e
INNER JOIN Training AS t ON e.EmployeeID = t.EmployeeID;

-- Perform a left join between Employee and Training tables
SELECT e.FirstName, e.LastName 
FROM Employee AS e
LEFT JOIN Training AS t ON e.EmployeeID = t.EmployeeID;

-- Group by DateCompleted and EmployeeID and sum CreditHours
SELECT DateCompleted, EmployeeID, SUM(CreditHours) AS TotalCreditHours 
FROM Training
GROUP BY DateCompleted, EmployeeID;

----subqueries

SELECT LastName FROM Employee
WHERE LastName IN (SELECT LastName FROM Employee WHERE DateOfBirth = '1990-01-01' );

SELECT LastName FROM Employee
WHERE DateOfBirth = '1990-01-01';

--- Subqueries

SELECT FirstName, LastName, SUM(CreditHours) as TotalCreditHours from Employee as e
INNER JOIN Training as t On e.EmployeeID =  t.EmployeeID
WHERE e.EmployeeID IN (SELECT EmployeeID FROM Training WHERE DateCompleted = '2015-02-02')
GROUP BY FirstName, LastName
ORDER BY FirstName, LastName, TotalCreditHours;

SELECT e.FirstName, e.LastName, SUM(t.CreditHours) AS TotalCreditHours 
FROM Employee AS e
INNER JOIN Training AS t ON e.EmployeeID = t.EmployeeID
WHERE e.EmployeeID IN (SELECT EmployeeID FROM Training WHERE DateCompleted = '2015-02-02')
GROUP BY e.FirstName, e.LastName
ORDER BY e.FirstName, e.LastName, TotalCreditHours;









