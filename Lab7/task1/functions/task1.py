def myMin(a, b, c, d):
    # return min(a, b, c, d)
    x = a
    if x > b:
        x = b
    if x > c:
        x = c
    if x > d:
        x = d
    return x

a, b, c, d = [int(i) for i in input().split()]
print(myMin(a, b, c, d))