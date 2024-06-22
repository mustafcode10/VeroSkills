# Dictionaries a data structure that maps key/value pairs.
# key must be unique and immatuable

me = {"name": "Mustaf", "age": 25}
me["hobbies"] = ["codng", "reading"]

print(me)

me["hobbies"].append("sleeping")
print(me)

print('keys', me.keys())
print('values', me.values())



# pseudocode
# loop string than check if the key inside increment value else not 
# than append letters dic
my_string = "I love coding with VeroSkills."

letters = {}

for char in my_string:
    # letters[char] = 'hi'
    # print(letters)
    if char not in letters.keys():
        letters[char] = 1
    else:
        letters[char] += 1
print(letters)


