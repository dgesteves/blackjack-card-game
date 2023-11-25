import { beforeEach, describe, expect, it } from 'vitest';
import { updateButton } from '.';
import { GameState } from '../../types';

describe('updateButton', () => {
  beforeEach(() => {
    document.body.innerHTML = '<button id="test-button"></button>';
  });

  it('disables button when there is a winner', () => {
    const gameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: 'Player',
    };

    updateButton('test-button', gameState);

    const button = document.getElementById('test-button');
    expect(button?.hasAttribute('disabled')).toBe(true);
  });

  it('enables button when there is no winner', () => {
    const gameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: '',
    };

    updateButton('test-button', gameState);

    const button = document.getElementById('test-button');
    expect(button?.hasAttribute('disabled')).toBe(false);
  });

  it('does not throw error for non-existent button', () => {
    const gameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: 'Player',
    };

    expect(() => updateButton('non-existent-button', gameState)).not.toThrow();
  });
});
