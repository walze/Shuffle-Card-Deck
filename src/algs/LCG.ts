// Linear congruential generator

const a = 1664525;
const c = 1013904223;
const m = 2 ** 32;
let seed = 12234;

const nextRand = () => (seed = (a * seed + c) % m);

export const LCG = () => nextRand() / m;
