
-------------------------------------------
-------------- PART ONE -------------------
-------------------------------------------


-- Read 
-- Select all data from Employee table
SELECT * FROM Employee;

-- Updade
-- Update FirstName for a specific record in Employee table
-- UPDATE Employee
-- SET FirstName = 'Mustaf'
-- WHERE EmployeeID = 4;

-- Delete 
DELETE FROM Employee;

-- Where
SELECT * FROM Employee
WHERE EmployeeID >= 2 OR DateOfBirth > '1995-03-10';

SELECT * FROM Employee
WHERE EmployeeID >= 2 
OR DateOfBirth > '1990 -01-01';


SELECT * FROM Employee
WHERE EmployeeID >= 2 
AND DateOfBirth > '1990 -01-01'
AND LastName = 'Smith'

SELECT * FROM Employee
WHERE EmployeeID >= 2 
OR ( DateOfBirth > '1990 -01-01'
AND LastName = 'Ahmed')

SELECT * FROM Employee
WHERE LastName like '%n'


SELECT * FROM Employee
WHERE LastName like 'm%'
   OR FirstName like 'm%'


SELECT * FROM Employee
WHERE LastName = 'Johnson'


UPDATE Employee
SET DateOfBirth = NULL
WHERE  FirstName = 'Banks'


SELECT * FROM Employee
WHERE DateOfBirth IS NULL

SELECT * FROM Employee
WHERE DateOfBirth IS NOT NULL

UPDATE Employee
SET LastName = 'O''Brien'
WHERE LastName = 'Brown'

SELECT FirstName FROM Employee
WHERE LastName = 'O''Brien'


-- -- Top
-- SELECT TOP 2 * FROM Employee

-- First SELECT then WHERE then ORDER BY

SELECT * FROM Employee
ORDER BY LastName, FirstName

SELECT LastName FROM Employee
ORDER BY LastName

-- Remove duplicate lastName

SELECT DISTINCT LastName FROM Employee
ORDER BY LastName


-- WHERE OR WHERE IN
SELECT * FROM Employee 
WHERE LastName = 'Doe'
OR LastName = 'Mega'
OR LastName = 'Smith'
ORDER BY LastName
-- WHERE IN

SELECT * FROM Employee
WHERE LastName IN ('Doe', 'Megan', 'Smith')
ORDER BY LastName

-------------------------------------------
-------------- PART TWO -------------------
-------------------------------------------


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