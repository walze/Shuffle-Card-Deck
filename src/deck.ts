type Card = [string, string]

const suits = [
  'hearts',
  'diamonds',
  'clubs',
  'spades',
].map((suit) => suit.toLocaleUpperCase());

const cards = [
  'A',
  ...[...Array(9)].map((_, n) => (n + 2).toString().toLocaleUpperCase()),
  'J',
  'Q',
  'K',
];

const card = (a: string, b: string) => [a, b] as Card;

export const deck = suits
    .flatMap((suit) => cards
        .map((str) => card( suit, str )));
