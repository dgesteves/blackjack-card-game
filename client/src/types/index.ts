/**
 * Enum representing the four suits in a deck of cards
 */
export enum Suit {
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
  Clubs = 'Clubs',
  Spades = 'Spades',
}

/**
 * Enum representing the thirteen ranks in a deck of cards
 */
export enum Rank {
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'J',
  Queen = 'Q',
  King = 'K',
  Ace = 'A',
}

/**
 * Type representing a card in a deck of cards
 * Includes the suit, rank, and value of the card
 */
export type Card = {
  suit: Suit;
  rank: Rank;
  value: number;
};

/**
 * Type representing the state of a Blackjack game
 * Includes the player's hand and points, the dealer's hand and points, and the winner of the game
 */
export type GameState = {
  playerHand: Card[];
  playerPoints: number;
  dealerHand: Card[];
  dealerPoints: number;
  winner?: string;
};

export type SetupElement = {
  parent: HTMLElement;
  selector: string;
  type: string;
  id?: string;
  src?: string;
  alt?: string;
  className?: string;
  color?: string;
  textContent?: string;
};
