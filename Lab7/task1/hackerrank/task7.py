if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    mx1, mx2 = -1e10, -1e10
    for i in arr:
        if i > mx1:
            mx2 = mx1
            mx1 = i
        elif i > mx2 and i != mx1:
            mx2 = i
    print(mx2)

    # https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem?isFullScreen=true