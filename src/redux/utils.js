export const adjust = (index, fn, arr) => {
  let copy = [...arr];
  copy[index] = fn(copy[index]);
  return copy;
};
