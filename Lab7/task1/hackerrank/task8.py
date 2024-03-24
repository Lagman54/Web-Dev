if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    ans = 0
    for i in student_marks[query_name]:
        ans += i
    print("{:.2f}".format(round(ans / 3, 2)))

    # https://www.hackerrank.com/challenges/finding-the-percentage/problem?isFullScreen=true