def lucky_sum(a, b, c):
  if a == 13:
    return 0
  sum = a
  if b == 13:
    return sum
  sum += b
  if c == 13:
    return sum
  return sum + c
