import { expect, describe, beforeEach, it, vi, Mock, afterEach } from 'vitest';
import { startGame } from '.';
import * as services from '../../services';
import * as handleError from '../handleError';
import * as updateUI from '../updateUI';
import { uiState } from '../updateUI';

describe('startGame function', () => {
  let mockCreateGame: Mock;
  let mockUpdateUI: Mock;
  let mockHandleError: Mock;

  beforeEach(() => {
    mockCreateGame = vi.fn();
    mockUpdateUI = vi.fn();
    mockHandleError = vi.fn();

    uiState.gameId = undefined as unknown as string;

    vi.spyOn(services, 'createGame').mockImplementation(mockCreateGame);
    vi.spyOn(updateUI, 'updateUI').mockImplementation(mockUpdateUI);
    vi.spyOn(handleError, 'handleError').mockImplementation(mockHandleError);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('starts a new game successfully', async () => {
    const mockGame = { gameId: '1', gameState: {} };
    mockCreateGame.mockResolvedValueOnce(mockGame);

    await startGame();

    expect(mockCreateGame).toHaveBeenCalled();
    expect(uiState.gameId).toEqual(mockGame.gameId);
    expect(mockUpdateUI).toHaveBeenCalledWith(mockGame.gameState);
  });

  it('handles error when starting a new game fails', async () => {
    const mockError = new Error('Network error');
    mockCreateGame.mockRejectedValueOnce(mockError);

    await startGame();

    expect(mockCreateGame).toHaveBeenCalled();
    expect(mockHandleError).toHaveBeenCalledWith(
      'Error starting the game:',
      mockError,
    );
  });

  it('does not update uiState.gameId and does not call updateUI when createGame throws an error', async () => {
    const mockError = new Error('Network error');
    mockCreateGame.mockRejectedValueOnce(mockError);

    await startGame();

    expect(uiState.gameId).toBeUndefined();
    expect(mockUpdateUI).not.toHaveBeenCalled();
  });

  it('does not call index when createGame does not throw an error', async () => {
    const mockGame = { gameId: '1', gameState: {} };
    mockCreateGame.mockResolvedValueOnce(mockGame);

    await startGame();

    expect(mockHandleError).not.toHaveBeenCalled();
  });

  it('updates uiState.gameId and calls updateUI with correct arguments when createGame does not throw an error', async () => {
    const mockGame = { gameId: '1', gameState: {} };
    mockCreateGame.mockResolvedValueOnce(mockGame);

    await startGame();

    expect(uiState.gameId).toEqual(mockGame.gameId);
    expect(mockUpdateUI).toHaveBeenCalledWith(mockGame.gameState);
  });

  it('handles error when starting a new game fails with non-Error rejection', async () => {
    mockCreateGame.mockRejectedValueOnce('An error occurred');

    await startGame();

    expect(mockCreateGame).toHaveBeenCalled();
    expect(mockHandleError).toHaveBeenCalledWith(
      'Error starting the game:',
      undefined,
    );
  });
});
