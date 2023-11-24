import { RANKS, SUITS } from '../../constants';
import { Rank, Suit } from '../../types';
import { Card } from '../card';

export class Deck {
  cards: Card[];

  constructor() {
    this.cards = this.generateDeck();
  }

  /**
   * Function to generate a full deck of 52 cards
   * @returns {Card[]} An array of Card objects
   */
  generateDeck(): Card[] {
    return SUITS.flatMap((suit) =>
      RANKS.map((rank) => new Card(suit as Suit, rank as Rank))
    );
  }

  /**
   * Function to shuffle the deck
   * Uses the Fisher-Yates algorithm
   */
  shuffle(): void {
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
    const card = this.cards.pop();
    if (!card) {
      throw new Error('Deck is empty');
    }
    return card;
  }
}
