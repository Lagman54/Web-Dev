n = int(input())
d = []
for i in range(1, int(n ** 0.5) + 1):
    if n % i == 0:
        d.append(i)
        if i != int(n ** 0.5):
            d.append(n // i)
print(*sorted(d))