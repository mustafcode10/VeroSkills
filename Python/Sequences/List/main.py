# Sequences an enumerated collection of objects in which repetations are allowed and order matters.

# List mutable an indexed mutable sequences of comma and order matter seperated items.

# help(list)


# my_list = [42, 3.14,[0,1,2],"spam", True]
# print('my_list', my_list)
# print(type(my_list))
# my_list.append("eggs")
# my_list.remove("spam")
# print('my_list', my_list)
# print(len(my_list))
# # help(myList)


# variable num  of increment 
#  loops all num and then checks if the num even than append to event the even
evens = []

num = 0

while num <= 100:
    if num % 2 == 0:
        evens.append(num)
    num += 1
print(evens)


