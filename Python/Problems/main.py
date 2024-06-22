num1 = 3

if num1 % 2 == 0 :
    print('even')
else:
    print('odd')

numbers = [1, 2, 3, 4, 5, 6]


# for num1 in numbers:
#     print(num1)
#     if num1 % 2 == 0:
#         print('even num')
#     else:
#         print('odd num')

# Write a program that prints “fizz” if a number is divisible by 3, “buzz” 
# if a number is divisible by 5 and “fizzbuzz” if a number is divisible by both 3 and 5. 
# If a number is not divisible by 3 or 5, print “nothing” to the screen.


#variable to store num then check if the num divide 3 no reminder print fizz and so on num 5 print buzz
# also num 3 and 5 print fizzbuzz else print nothing

num = 1

if num % 3 == 0 and num % 5 == 0:
    print('fizzbuzz')
elif num % 3 == 0:
    print('fizz')
elif num % 5 == 0:
    print("buzz")
else:
    print('nothing')


def fizzbuzz(n):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

# Test the function
fizzbuzz(15)


def longest_word(sentence):
    words = sentence.split()
    return max(words, key=len)

# Test the function
print(longest_word("I love programming in Python"))  # Output: "programming"


def max_min_word_length(sentence):
    words = sentence.split()
    max_length = max(len(word) for word in words)
    min_length = min(len(word) for word in words)
    return max_length, min_length

# Test the function
print(max_min_word_length("Python is a powerful language"))  # Output: (powerful, 1)


def max_min_elements(nums):
    return max(nums), min(nums)

# Test the function
print(max_min_elements([3, 5, 2, 7, 1]))  # Output: (7, 1)



def count_vowels(s):
    vowels = 'aeiou'
    return sum(1 for char in s if char.lower() in vowels)

# Test the function
print(count_vowels("Hello, World!"))  # Output: 3


def reverse_strings(strings):
    return [s[::-1] for s in strings]

# Test the function
print(reverse_strings(["hello", "world", "python"]))  # Output: ['olleh', 'dlrow', 'nohtyp']


# Sure! Let's approach each challenge with a different method. Here are alternative solutions for the given challenges:

def longest_word(sentence):
    words = sentence.split()
    longest = ''
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest

# Test the function
print(longest_word("I love programming in Python"))  # Output: "programming"


def max_min_word_length(sentence):
    words = sentence.split()
    max_length = len(words[0])
    min_length = len(words[0])
    for word in words[1:]:
        word_length = len(word)
        if word_length > max_length:
            max_length = word_length
        elif word_length < min_length:
            min_length = word_length
    return max_length, min_length

# Test the function
print(max_min_word_length("Python is a powerful language"))  # Output: (powerful, 1)


def max_min_elements(nums):
    max_num = nums[0]
    min_num = nums[0]
    for num in nums[1:]:
        if num > max_num:
            max_num = num
        elif num < min_num:
            min_num = num
    return max_num, min_num

# Test the function
print(max_min_elements([3, 5, 2, 7, 1]))  # Output: (7, 1)


def count_vowels(s):
    vowels = 'aeiou'
    count = 0
    for char in s:
        if char.lower() in vowels:
            count += 1
    return count

# Test the function
print(count_vowels("Hello, World!"))  # Output: 3


def reverse_strings(strings):
    reversed_strings = []
    for s in strings:
        reversed_strings.append(s[::-1])
    return reversed_strings

# Test the function
print(reverse_strings(["hello", "world", "python"]))  # Output: ['olleh', 'dlrow', 'nohtyp']


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_linked_list(head):
    prev = None
    current = head
    while current is not None:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev

# Test the function
# Assume linked list: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

reversed_head = reverse_linked_list(head)
while reversed_head is not None:
    print(reversed_head.val, end=" -> ")
    reversed_head = reversed_head.next
