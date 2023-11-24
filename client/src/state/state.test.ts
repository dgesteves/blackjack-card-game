import { expect, describe, it, beforeEach, vi } from 'vitest';
import {
  updateElementText,
  updateHand,
  updateButton,
  updateResultText,
  updateUI,
  checkWinner,
} from '.';
import { Card, GameState, Rank, Suit } from '../types';
import { RESULT_ID } from '../constants';

vi.mock('./constants', () => ({
  DEALER_HAND_ID: 'dealer-hand',
  DEALER_POINTS_ID: 'dealer-points',
  HIT_ID: 'hit',
  PLAYER_HAND_ID: 'player-hand',
  PLAYER_POINTS_ID: 'player-points',
  RESULT_ID: 'result',
  STAND_ID: 'stand',
}));

describe('state', () => {
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockElement = {
      innerText: '',
      innerHTML: '',
      setAttribute: vi.fn(),
      removeAttribute: vi.fn(),
    } as unknown as HTMLElement;
    document.getElementById = vi.fn().mockReturnValue(mockElement);
  });

  it('updateElementText', () => {
    updateElementText('test-id', 'test-text', 'test-prefix');
    expect(document.getElementById).toHaveBeenCalledWith('test-id');
    expect(mockElement.innerText).toBe('test-prefix test-text');
  });

  it('updateHand', () => {
    const mockHand: Card[] = [
      { suit: Suit.Hearts, rank: Rank.Ace, value: 11 },
      { suit: Suit.Diamonds, rank: Rank.Ten, value: 10 },
    ];
    updateHand('test-id', mockHand);
    expect(document.getElementById).toHaveBeenCalledWith('test-id');
    expect(mockElement.innerHTML).toContain('alt="A of Hearts"');
    expect(mockElement.innerHTML).toContain('alt="10 of Diamonds"');
  });

  it('updateButton', () => {
    const mockGameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: 'Player',
    };
    updateButton('test-id', mockGameState);
    expect(document.getElementById).toHaveBeenCalledWith('test-id');
    expect(mockElement.setAttribute).toHaveBeenCalledWith('disabled', 'true');
  });

  it('updateResultText', () => {
    const mockGameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: 'Player',
    };
    updateResultText(mockGameState);
    expect(document.getElementById).toHaveBeenCalledWith(RESULT_ID);
    expect(mockElement.innerText).toBe('YOU WINN');
  });

  it('updateUI', () => {
    const mockGameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: 'Player',
    };
    updateUI(mockGameState);
    expect(document.getElementById).toHaveBeenCalledTimes(7);
  });

  it('checkWinner', () => {
    const mockGameState: GameState = {
      playerHand: [],
      playerPoints: 0,
      dealerHand: [],
      dealerPoints: 0,
      winner: 'Player',
    };
    checkWinner(mockGameState);
    expect(document.getElementById).toHaveBeenCalledWith(RESULT_ID);
    expect(mockElement.innerText).toBe('YOU WINN');
  });
});
