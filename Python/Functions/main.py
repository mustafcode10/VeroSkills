# Functions are a bundle of instructions that achieve an outcome.
# Scope where a variable is visible in code.

def greeting(name):
    print("Hello ",name)
greeting("Mustaf")


def add(a, b):
    # for the documentation when you call help(add)
    """ The sum of a + b"""
    return(a +b)

sumNumbers = add(4, 5)
print("Sum numbers: ", sumNumbers)
# help(add)

# global you can see inside outside in the func but local just inside the func
global_var = "global"

def local_fun():
    local_var = "local"

print(global_var)
# print(local_var)