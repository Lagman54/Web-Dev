def sum13(nums):
  ans = 0
  for i in range(len(nums)):
    if nums[i] == 13 or i > 0 and nums[i - 1] == 13:
      continue
    ans += nums[i]
  return ans