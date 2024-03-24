# https://www.hackerrank.com/challenges/the-minion-game/problem?isFullScreen=true

def minion_game(string):
    vowels = ['a', 'e', 'i', 'o', 'u']
    n = len(string)
    k, s = 0, 0
    for i in range(n):
        if string[i].lower() in vowels:
            k += n - i
        else:
            s += n - i
    if k < s:
        print(f'Stuart {s}')
    elif k > s:
        print(f'Kevin {k}')
    else:
        print('Draw')
        
if __name__ == '__main__':
    s = input()
    minion_game(s)