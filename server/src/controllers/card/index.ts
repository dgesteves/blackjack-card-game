import { Rank, Suit } from '../../types';

export class Card {
  suit: Suit;
  rank: Rank;
  value: number;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
    this.value = this.calculateValue();
  }

  /**
   * Function to calculate the value of the card in a game of Blackjack
   * @returns {number} The value of the card
   */
  calculateValue(): number {
    if (this.rank === 'A') return 11;
    if (['K', 'Q', 'J'].includes(this.rank)) return 10;
    return parseInt(this.rank);
  }
}
