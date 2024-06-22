# Tuple immutable sequences.
my_tuple = (42, 3.14,[0,1,2],"spam", True)
print('my_tple', my_tuple)
print(type(my_tuple))


# Tuples
me = (25, "Mutaf", True, ["coding", "reading"])

#tuple unpacking

age, name, employed, hobbies = me
print(me)
print(age)
print(name)
print(hobbies)
hobbies.append("sleeping")
print(me)