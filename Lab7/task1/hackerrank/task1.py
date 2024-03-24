#!/bin/python3
# https://www.hackerrank.com/challenges/py-if-else/problem?isFullScreen=true
import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    if n % 2 == 0 and 2 <= n and n <= 5 or n % 2 == 0 and 20 < n:
        print('Not Weird')
    elif n % 2 != 0 or n % 2 == 0 and 6 <= n and n <= 20:
        print('Weird')
