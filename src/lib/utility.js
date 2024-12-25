export const wrapNums = (min, max, value) => {
  // If the value is less than the minimum, wrap it around to the max
  if (value < min) {
    return max - 1;
  }
  // If the value is greater than or equal to the max, wrap it around to the min
  if (value >= max) {
    return min;
  }
  return value;
};
