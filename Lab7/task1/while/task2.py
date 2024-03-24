n = int(input())
x = 2
f = 1
while(x * x <= n):
    if n % x == 0:
        print(x)
        f = 0
    x += 1
if f:
    print(n)
