const digits = 12;

let seed = 156227851227;

const nextRand = () => {
  let n = (seed * seed) + '';

  while (n.length < digits * 2) {
    n = '0' + n;
  }

  const start = Math.floor(digits / 2);
  const end = start + digits;

  seed = +n.substring(start, end);
  return seed;
};


export const middleSquare = () => nextRand() / 999999999999;


