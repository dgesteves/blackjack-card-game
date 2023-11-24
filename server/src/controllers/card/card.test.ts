import { Card } from '.';
import { Rank, Suit } from '../../types';

describe('Card', () => {
  it('should initialize with the correct suit, rank, and value', () => {
    const card = new Card(Suit.Hearts, Rank.Ace);
    expect(card.suit).toBe(Suit.Hearts);
    expect(card.rank).toBe(Rank.Ace);
    expect(card.value).toBe(11);
  });

  it('should calculate the correct value for number cards', () => {
    const card = new Card(Suit.Diamonds, Rank.Five);
    expect(card.value).toBe(5);
  });

  it('should calculate the correct value for face cards', () => {
    const card = new Card(Suit.Clubs, Rank.King);
    expect(card.value).toBe(10);
  });

  it('should calculate the correct value for aces', () => {
    const card = new Card(Suit.Spades, Rank.Ace);
    expect(card.value).toBe(11);
  });
});
