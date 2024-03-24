x = input()
ans = 0
for i in range(len(x) - 1, -1, -1):
    ans = ans * 10 + int(x[i])
print(ans)
