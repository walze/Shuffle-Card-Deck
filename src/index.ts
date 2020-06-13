const suits = [
  'hearts',
  'diamonds',
  'clubs',
  'spades',
];

type Card = [string, string]
const card = (a: string, b: string) => [a, b] as Card;

export const cards = [
  'A',
  ...[...Array(9)].map((_, n) => (n + 2).toString().toUpperCase()),
  'J',
  'Q',
  'K',
];

const deck = suits.flatMap((suit) => cards.map((card) => [suit, card]));
console.log(deck);
