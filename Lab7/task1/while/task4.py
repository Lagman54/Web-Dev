n = int(input())
x = 1
f = 1
while x <= n:
    if x == n:
        print('YES')
        f = 0
    x *= 2
if f:
    print('NO')