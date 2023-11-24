import { Deck } from '.';
import { Card } from '../card';

describe('Deck', () => {
  let deck: Deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it('should initialize with 52 cards', () => {
    expect(deck.cards.length).toBe(52);
  });

  it('should contain only unique cards', () => {
    const cardSet = new Set(deck.cards.map((card) => JSON.stringify(card)));
    expect(cardSet.size).toBe(52);
  });

  it('should shuffle the deck', () => {
    const originalOrder = [...deck.cards];
    deck.shuffle();
    expect(deck.cards).not.toEqual(originalOrder);
  });

  it('should deal a card from the deck', () => {
    const card = deck.dealCard();
    expect(card).toBeInstanceOf(Card);
    expect(deck.cards.length).toBe(51);
  });

  it('should throw an error when dealing from an empty deck', () => {
    for (let i = 0; i < 52; i++) {
      deck.dealCard();
    }
    expect(() => deck.dealCard()).toThrow('Deck is empty');
  });
});
