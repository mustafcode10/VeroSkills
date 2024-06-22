# Loops while and for loops.

# print number 0 - 9 using while loop.

num1 =  0

while num1 < 10 :
    print(num1)
    num1 += 1


num = 0

while num <= 50:
    if num % 2 == 0:
        print(num, "is Even")
    else:
        print(num, "is Odd")
    num += 1



def get_current_count(my_list, char_to_count):
    count = 0
    for string in my_list:
        print(f"Checking string: {string}")
        for char in string:
            print(f"Checking character: {char}")
            if char == char_to_count:
                count += 1
    return count

my_list = ["mustaf", "ahmed", "melisa"]
char_to_count = 'm'
count = get_current_count(my_list, char_to_count)
print(f"The number of '{char_to_count}' characters is:", count)
