def caught_speeding(speed, is_birthday):
  f = 0
  if is_birthday:
    f = 5
  if speed <= 60 + f:
    return 0
  if speed >= 61 and speed <= 80 + f:
    return 1
  return 2
