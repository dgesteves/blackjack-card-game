import { Rank, Suit } from '../../types';

/**
 * Class representing a card
 */
export class Card {
  suit: Suit; // The suit of the card
  rank: Rank; // The rank of the card
  value: number; // The value of the card

  /**
   * Card constructor
   * Initializes a new card with a suit, rank, and value
   * @param {Suit} suit - The suit of the card
   * @param {Rank} rank - The rank of the card
   */
  constructor(suit: Suit, rank: Rank) {
    this.suit = suit; // Set the suit of the card
    this.rank = rank; // Set the rank of the card
    this.value = this.calculateValue(); // Calculate and set the value of the card
  }

  /**
   * Function to calculate the value of the card in a game of Blackjack
   * @returns {number} The value of the card
   */
  calculateValue(): number {
    if (this.rank === 'A') return 11; // If the rank is 'A', the value is 11
    if (['K', 'Q', 'J'].includes(this.rank)) return 10; // If the rank is 'K', 'Q', or 'J', the value is 10
    return parseInt(this.rank); // Otherwise, the value is the integer value of the rank
  }
}
