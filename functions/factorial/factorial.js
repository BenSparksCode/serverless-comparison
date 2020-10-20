
const factorial = (num) => {
    if (!num || typeof(num) != 'number' || num < 0) return -1
    if (num === 1 || num === 0) return 1
    return num * factorial(num - 1)
}