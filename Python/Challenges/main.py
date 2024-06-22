def get_current_count(my_list, char_count):
    count = 0
    
    for string in my_list:
        for char in string:
            if char == char_count:
                count += 1
    
    return count

# Given list
my_list = ["mustaf", "ahmed", "melisa"]
count = get_current_count(my_list, 'm')
print(count)








