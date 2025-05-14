# 06-05-2025, Operators in python

# Following are some common operators in python:
# 1. Arithmetic operators: +, -, *, / etc.
# 2. Assignment operators: =, +=, -= etc.
# 3. Comparison operators: ==, >, >=, <, != etc.
# 4. Logical operators: and, or, not.


#Arithmetic Operators
a = 9
b = 5
c = a-b
print(c)

#Assignment Operators
a = 4-2 # Assign 4-2 in a
print(a)
b = 6
b += 3 # increment the value of b by 3 and then assign it to b
print(b)
c = 10
c -= 5 # decrement the value of c by 5 and then assign it to c
print(c)
d = 4
d *= 4 # multiply the value of d by 4 and then assign it to d
print(d)

#Comparison Operators, the result of comparison operator is a boolean
e = 5<4
print(e)

#Logical Operators,

f = True or False 
#truth table of 'or'
print("True or False is", True or False)
print("True or True is", True or True)
print("False or True is", False or True)
print("False or False is", False or False)

#truth table of 'And'
print("True and False is", True and False)
print("True and True is", True and True)
print("False and True is", False and True)
print("False and False is", False and False)

print(not(False)) # not operator simples converts the true into false and false into truee