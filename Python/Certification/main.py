
my_list = ["mustaf", "priyanka"]
currents = {}
for string  in my_list:
    for char in string:
        if char not in currents.keys():
            currents[char] = 1
        else: 
            currents[char] += 1

def get_current(char):
    if char in currents.keys():
        return currents[char]
    else:
        return 0  # Return 0 if the character is not found in the dictionary

print(get_current('a'))


