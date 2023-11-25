import {
  expect,
  describe,
  beforeEach,
  it,
  vi,
  afterEach,
  SpyInstance,
} from 'vitest';
import { checkWinner } from '.';
import { GameState } from '../../types';
import * as updateResultText from '../updateResultText';
import { uiState } from '../updateUI';

describe('checkWinner', () => {
  let gameState: GameState;
  let updateResultTextSpy: SpyInstance;

  beforeEach(() => {
    gameState = {
      dealerHand: [],
      dealerPoints: 0,
      playerHand: [],
      playerPoints: 0,
      winner: undefined,
    };

    updateResultTextSpy = vi.spyOn(updateResultText, 'updateResultText');
    uiState.gameId = '123';
  });

  afterEach(() => {
    updateResultTextSpy.mockRestore();
  });

  it('clears gameId and updates result text when there is a winner', () => {
    gameState.winner = 'Player 1';

    checkWinner(gameState);

    expect(uiState.gameId).toBe('');
    expect(updateResultTextSpy).toHaveBeenCalledWith(gameState);
  });

  it('does not clear gameId or update result text when there is no winner', () => {
    checkWinner(gameState);

    expect(uiState.gameId).toBe('123');
    expect(updateResultTextSpy).not.toHaveBeenCalled();
  });

  it('clears gameId and updates result text when player is the winner', () => {
    gameState.winner = 'Player';

    checkWinner(gameState);

    expect(uiState.gameId).toBe('');
    expect(updateResultTextSpy).toHaveBeenCalledWith(gameState);
  });

  it('clears gameId and updates result text when dealer is the winner', () => {
    gameState.winner = 'Dealer';

    checkWinner(gameState);

    expect(uiState.gameId).toBe('');
    expect(updateResultTextSpy).toHaveBeenCalledWith(gameState);
  });

  it('does not clear gameId or update result text when the winner is undefined', () => {
    checkWinner(gameState);

    expect(uiState.gameId).toBe('123');
    expect(updateResultTextSpy).not.toHaveBeenCalled();
  });
});
