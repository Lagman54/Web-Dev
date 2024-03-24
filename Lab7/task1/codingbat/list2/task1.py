def count_evens(nums):
  cnt = 0
  for i in nums:
    cnt += i % 2 == 0
  return cnt