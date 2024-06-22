-- Drop the table if it exists (for resetting purposes)
DROP TABLE IF EXISTS Employee;

-- Create the Employee table
CREATE TABLE Employee (
    EmployeeID INTEGER PRIMARY KEY,
    FirstName TEXT,
    LastName TEXT,
    BirthDate DATE
);

-- Insert some sample data into the Employee table
INSERT INTO Employee (EmployeeID, FirstName, LastName, BirthDate) VALUES
(1, 'John', 'Doe', '1980-05-15'),
(2, 'Jane', 'Smith', '1992-07-23'),
(3, 'Alice', 'Johnson', '1985-12-10'),
(4, 'Bob', 'Brown', '1995-03-09'),
(5, 'Charlie', 'Ahmed', '1993-04-20'),
(6, 'Emily', 'Clark', '1990-01-01');

-- Select all records from Employee
SELECT * FROM Employee;

-- Update FirstName for a specific record in Employee table
UPDATE Employee
SET FirstName = 'Mustaf'
WHERE EmployeeID = 4;

-- Select all records from Employee to verify the update
SELECT * FROM Employee;

-- Delete all records from Employee
-- Uncomment the next line to execute the delete operation
-- DELETE FROM Employee;

-- Select all records to verify deletion
-- SELECT * FROM Employee;

-- Conditional selection using OR
SELECT * FROM Employee
WHERE EmployeeID >= 2 OR BirthDate > '1995-03-10';

SELECT * FROM Employee
WHERE EmployeeID >= 2 OR BirthDate > '1990-01-01';

-- Conditional selection using AND
SELECT * FROM Employee
WHERE EmployeeID >= 2 
  AND BirthDate > '1990-01-01'
  AND LastName = 'Smith';

-- Combined conditional selection using OR and AND
SELECT * FROM Employee
WHERE EmployeeID >= 2 
  OR (BirthDate > '1990-01-01' AND LastName = 'Ahmed');

-- Pattern matching with LIKE
SELECT * FROM Employee
WHERE LastName LIKE '%n';

SELECT * FROM Employee
WHERE LastName LIKE 'm%' 
  OR FirstName LIKE 'm%';

-- Selection by exact match
SELECT * FROM Employee
WHERE LastName = 'Johnson';

-- Update to set BirthDate to NULL
UPDATE Employee
SET BirthDate = NULL
WHERE FirstName = 'Banks';

-- Select records where BirthDate is NULL
SELECT * FROM Employee
WHERE BirthDate IS NULL;

-- Select records where BirthDate is NOT NULL
SELECT * FROM Employee
WHERE BirthDate IS NOT NULL;

-- Update with special characters in value
UPDATE Employee
SET LastName = 'O''Brien'
WHERE LastName = 'Brown';

-- Select by LastName
SELECT FirstName 
FROM Employee
WHERE LastName = 'O''Brien';
