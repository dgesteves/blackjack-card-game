import { beforeEach, describe, expect, it } from 'vitest';
import { updateHand } from '.';
import { Card, Suit, Rank } from '../../types';

describe('updateHand', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<div id="player-hand"></div><div id="dealer-hand"></div>';
  });

  it('updates player hand correctly', () => {
    const hand: Card[] = [
      { suit: Suit.Clubs, rank: Rank.Ace, value: 11 },
      { suit: Suit.Spades, rank: Rank.Four, value: 4 },
    ];

    updateHand('player-hand', hand);

    const handElement = document.getElementById('player-hand');
    const images = handElement?.getElementsByTagName('img');
    expect(images?.[0].alt).toBe('A of Clubs');
    expect(images?.[1].alt).toBe('4 of Spades');
  });

  it('updates dealer hand correctly when game is in progress', () => {
    const hand: Card[] = [{ suit: Suit.Hearts, rank: Rank.Two, value: 2 }];

    updateHand('dealer-hand', hand);

    const handElement = document.getElementById('dealer-hand');
    expect(handElement?.innerHTML).toContain('Card turn back');
  });

  it('updates dealer hand correctly when game is over', () => {
    const hand: Card[] = [{ suit: Suit.Hearts, rank: Rank.Two, value: 2 }];

    updateHand('dealer-hand', hand, 'player');

    const handElement = document.getElementById('dealer-hand');
    expect(handElement?.innerHTML).toContain('2 of Hearts');
  });
});
