

def factorial(num):
    if(not num or type(num) != int or num < 0):
        return -1
    if(num == 0 or num == 1):
        return 1
    return num*factorial(num - 1)

# For testing
if __name__ == "__main__":
    print(factorial(10))