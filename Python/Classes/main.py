class Account:
    def __init__(self, acct_type, balance):
        # This method is called when an Account object is created.
        # It initializes the account type and balance.
        self.acct_type = acct_type
        self.balance = balance
    
    def deposit(self, amount):
        # This method allows you to add an amount to the current balance.
        self.balance += amount

# Create a checking account with an initial balance of 5000
checking = Account('checking', 5000)
# Deposit 2000 into the checking account
checking.deposit(2000)
# Print the account type and balance
print(checking.acct_type)  # Output: checking
print(checking.balance)    # Output: 7000

# Create a savings account with an initial balance of 4000
savings = Account('savings', 4000)
# Deposit 2000 into the savings account
savings.deposit(2000)
# Print the account type and balance
print(savings.acct_type)   # Output: savings
print(savings.balance)     # Output: 6000




class Book:
    def __init__(self, title, author, year_published):
        self.title = title
        self.author = author
        self.year_published = year_published
        self.is_checked_out = False

    def check_out(self):
        if not self.is_checked_out:
            self.is_checked_out = True
            print(f"{self.title} has been checked out.")
        else:
            print(f"{self.title} is already checked out.")

    def return_book(self):
        if self.is_checked_out:
            self.is_checked_out = False
            print(f"{self.title} has been returned.")
        else:
            print(f"{self.title} was not checked out.")

# Example usage
book1 = Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)
book1.check_out()
book1.return_book()
book1.check_out()
book1.check_out()




class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        self.odometer_reading += miles

    def get_description(self):
        return f"{self.year} {self.make} {self.model} with {self.odometer_reading} miles"

# Example usage
car1 = Car("Toyota", "Camry", 2020)
car1.update_odometer(15000)
car1.increment_odometer(100)
print(car1.get_description())




class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.courses = []

    def enroll(self, course):
        self.courses.append(course)
        print(f"{self.name} has enrolled in {course}.")

    def list_courses(self):
        return f"{self.name} is enrolled in: {', '.join(self.courses)}"

# Example usage
student1 = Student("John Doe", "12345")
student1.enroll("Math 101")
student1.enroll("History 202")
print(student1.list_courses())


class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b != 0:
            return a / b
        else:
            return "Cannot divide by zero"

# Example usage
calc = Calculator()
print(calc.add(5, 3))       # Output: 8
print(calc.subtract(10, 4)) # Output: 6
print(calc.multiply(6, 7))  # Output: 42
print(calc.divide(8, 2))    # Output: 4.0
print(calc.divide(5, 0))    # Output: Cannot divide by zero



