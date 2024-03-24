n = int(input())
arr = [int(i) for i in input().split()]
cnt = 0
for i in range(1, len(arr)):
    if arr[i] * arr[i - 1] > 0:
        print('YES')
        exit(0)
print('NO')
