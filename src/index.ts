// import {deck} from './deck';

import {middleSquare} from './algs/middleSquare';
import {LCG} from './algs/LCG';

export const shuffle = (rng: () => number) =>
<T>(_array: T[]) => {
  const array = [..._array];

  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(rng() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

console.log(shuffle(middleSquare)([1, 2, 3, 4, 5]));


// canvas
const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
canvas.width = width;
canvas.height = height;

const context = canvas.getContext('2d') as CanvasRenderingContext2D;

let y = 0;

const draw = (rng: () => number) => () => {
  for (let x = 0; x < width; x++) {
    const n = rng();

    if (n < 0.5) {
      const color = '#' + Math.floor((0xFFFFFF * n)).toString(16);

      context.fillStyle = color;
      context.fillRect(x, y, 1, 1);
    }
  }

  y++ < height && requestAnimationFrame(draw(rng));
};

draw(LCG)();
