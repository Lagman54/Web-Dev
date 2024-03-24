def squirrel_play(temp, is_summer):
  up = 90
  if is_summer:
    up = 100
  if temp >= 60 and temp <= up:
    return True
  return False
