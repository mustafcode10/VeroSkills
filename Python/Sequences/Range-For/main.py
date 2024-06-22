# Range a function that generates a sequences of numbers.
# For a loop that repeats code for every element in sequence.

start = 0
stop = 101
step = 1

my_range = range(start, stop, step)

num_sum = 0

print(my_range)

for number in my_range:
    num_sum += number
print(num_sum)


square_num = []

for num in my_range:
    num *= num
    square_num.append(num)
print('square num', square_num)


