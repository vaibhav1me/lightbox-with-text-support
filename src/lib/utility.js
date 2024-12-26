export const wrapNums = (min, max, value) => {
  const range = max - min;

  return ((((value - min) % range) + range) % range) + min;
};
