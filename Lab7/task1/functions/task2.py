def exp(a: float, n: int):
    x = 1
    for i in range(n):
        x *= a
    return x

a, n = [i for i in input().split()]
print(exp(float(a), int(n)))