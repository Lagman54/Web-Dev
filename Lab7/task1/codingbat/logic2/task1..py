def make_bricks(small, big, goal):
  # 0 <= a <= small
  # b <= big
  # a + 5 * b = goal
  # a = goal - 5 * b
  # 0 <= goal - 5 * b <= small
  # goal / 5 >= b >= (goal - small) / 5
    # [(goal - small) / 5, goal / 5]
    # [0, big]
  l = (goal - small) / 5.0
  r = goal // 5
  return max(l, 0) <= min(r, big)