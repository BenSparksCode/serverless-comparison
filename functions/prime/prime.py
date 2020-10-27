import math

def isPrime(num):
    prime = True

    # Handle edge false cases
    if (not num or type(num) != int or num < 2 or num % 2 == 0):
        return False

    # Check all odd factors up to sqrt(num) + 1
    for i in range(3, int(math.sqrt(num)+1), 2):
        if(num % i == 0):
            prime = False
            break

    return prime

# For testing
if __name__ == "__main__":
    print(isPrime(10164509))