n = int(input())
arr = [int(i) for i in input().split()]
cnt = 0
for i in range(1, len(arr) - 1):
    if arr[i - 1] < arr[i] and arr[i] > arr[i + 1]:
        cnt += 1
print(cnt)