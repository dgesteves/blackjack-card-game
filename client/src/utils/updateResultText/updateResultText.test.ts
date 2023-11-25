import { beforeEach, describe, expect, it, vi } from 'vitest';
import { updateResultText } from '.';
import { GameState } from '../../types';
import * as updateElementTextModule from '../updateElementText';

vi.mock('../updateElementText');

describe('updateResultText', () => {
  const mockUpdateElementText = vi.spyOn(
    updateElementTextModule,
    'updateElementText',
  );

  beforeEach(() => {
    mockUpdateElementText.mockClear();
  });

  it('displays win message when player wins', () => {
    const gameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: 'Player',
    };

    updateResultText(gameState);

    expect(mockUpdateElementText).toHaveBeenCalledWith('result', 'YOU WINN');
  });

  it('displays lose message when player loses', () => {
    const gameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: 'Dealer',
    };

    updateResultText(gameState);

    expect(mockUpdateElementText).toHaveBeenCalledWith('result', 'YOU LOST');
  });

  it('displays no message when game is in progress', () => {
    const gameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: '',
    };

    updateResultText(gameState);

    expect(mockUpdateElementText).toHaveBeenCalledWith('result', '');
  });
});
