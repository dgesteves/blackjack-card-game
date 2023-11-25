/**
 * Enum representing the four suits in a deck of cards
 * @enum {string}
 */
export enum Suit {
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
  Clubs = 'Clubs',
  Spades = 'Spades',
}

/**
 * Enum representing the thirteen ranks in a deck of cards
 * @enum {string}
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
 * @typedef {Object} Card
 * @property {Suit} suit - The suit of the card
 * @property {Rank} rank - The rank of the card
 * @property {number} value - The value of the card
 */
export type Card = {
  suit: Suit;
  rank: Rank;
  value: number;
};

/**
 * Type representing the state of a Blackjack game
 * Includes the player's hand and points, the dealer's hand and points, and the winner of the game
 * @typedef {Object} GameState
 * @property {Card[]} playerHand - The player's hand
 * @property {number} playerPoints - The player's points
 * @property {Card[]} dealerHand - The dealer's hand
 * @property {number} dealerPoints - The dealer's points
 * @property {string} [winner] - The winner of the game
 */
export type GameState = {
  playerHand: Card[];
  playerPoints: number;
  dealerHand: Card[];
  dealerPoints: number;
  winner?: string;
};

/**
 * Type representing a setup element
 * @typedef {Object} SetupElement
 * @property {HTMLElement} parent - The parent HTML element
 * @property {string} selector - The selector of the element
 * @property {string} type - The type of the element
 * @property {string} [id] - The id of the element
 * @property {string} [src] - The source of the element
 * @property {string} [alt] - The alternative text of the element
 * @property {string} [className] - The class name of the element
 * @property {string} [color] - The color of the element
 * @property {string} [textContent] - The text content of the element
 */
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