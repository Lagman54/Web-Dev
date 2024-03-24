def front_times(str, n):
  f_len = 3
  if f_len > len(str):
    f_len = len(str)
  front = str[:f_len]
  ans = ""
  for i in range(n):
    ans = ans + front
  return ans