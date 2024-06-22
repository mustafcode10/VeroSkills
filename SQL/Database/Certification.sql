
DROP TABLE IF EXISTS Employee;

DROP TABLE IF EXISTS Training;

CREATE TABLE Employees(
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Salary INT,
    DateOfBirth DATE
);




-- Salary
-- 1	John	Doe	50000
-- 2	Jane	Smith	60000
-- 3	Joe	Johnson	45000
-- 4	Mike	Brown	70000
-- 5	Sue	Williams	55000


INSERT INTO Employees (EmployeeID, FirstName, LastName, Salary)
VALUES(1, 'John', 'Doe', 50000),
(2, 'Jane', 'Smith', 60000),
(3, 'Joe', 'Johnson', 45000),
(4, 'Mike', 'Brown', 70000),
(5, 'Sue', 'Williams', 50000);

CREATE TABLE Training (
    TrainingID INT PRIMARY KEY,
    EmployeeID INT,
    FOREIGN KEY (EmployeeID)
        REFERENCES Employee(EmployeeID)

);

--- read employee
---- 
SELECT * FROM Employees; --- 

SELECT MAX(Salary) as SecondHighest from Employees

WHERE Salary < (SELECT  Max(Salary)  from Employees );


SELECT * from Employees
where FirstName like '%an%';

SELECT   * from Employees
ORDER by Salary DESC;







