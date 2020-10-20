package main

import (
	"fmt"
	"reflect"
)

func factorial(n int) int {
	if reflect.TypeOf(n).Kind() != reflect.Int || n < 0 {
		return -1
	}
	if n == 1 || n == 0 {
		return 1
	}
	return n * factorial(n-1)
}

func main() {
	fmt.Println(factorial(3))
}
