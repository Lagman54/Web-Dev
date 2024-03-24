x = int(input())
ok = 1
for i in range(2, int(x ** 0.5) + 1):
    if x % i == 0:
        print(i)
        ok = 0
        break
if ok:
    print(x)