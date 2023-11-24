import { RANKS, SUITS } from '../../constants';
import { Rank, Suit } from '../../types';
import { Card } from '../card';

/**
 * Class representing a deck of cards
 */
export class Deck {
  cards: Card[]; // Array to hold Card objects

  /**
   * Deck constructor
   * Initializes a new deck of cards
   */
  constructor() {
    this.cards = this.generateDeck(); // Generate a new deck of cards
  }

  /**
   * Function to generate a full deck of 52 cards
   * @returns {Card[]} An array of Card objects
   */
  generateDeck(): Card[] {
    // Generate a new deck by mapping over each suit and rank
    return SUITS.flatMap((suit) =>
      RANKS.map((rank) => new Card(suit as Suit, rank as Rank))
    );
  }

  /**
   * Function to shuffle the deck
   * Uses the Fisher-Yates algorithm
   */
  shuffle(): void {
    // Shuffle the deck using the Fisher-Yates algorithm
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  /**
   * Function to deal a card from the deck
   * @returns {Card} The dealt card
   * @throws {Error} If the deck is empty
   */
  dealCard(): Card {
    // Deal a card from the deck
    const card = this.cards.pop();
    // Throw an error if the deck is empty
    if (!card) {
      throw new Error('Deck is empty');
    }
    return card;
  }
}
