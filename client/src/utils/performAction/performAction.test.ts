import { expect, describe, beforeEach, it, vi, Mock } from 'vitest';
import { performAction } from './index.ts';
import { checkWinner } from '../checkWinner';
import { handleError } from '../handleError';
import { uiState, updateUI } from '../updateUI';

vi.mock('../checkWinner');
vi.mock('../handleError');
vi.mock('../updateUI');

// Modify the type of uiState.gameId to be string | null
uiState.gameId = '' as string;

describe('performAction', () => {
  let mockAction: Mock;

  beforeEach(() => {
    vi.resetAllMocks();
    mockAction = vi.fn();
  });

  it('should not perform action if game has not been started', async () => {
    uiState.gameId = '';

    await performAction(mockAction);

    expect(mockAction).not.toHaveBeenCalled();
  });

  it('should perform action and update UI if game has been started', async () => {
    uiState.gameId = '1234';
    const mockGameState = { dealer: [], player: [] };
    mockAction.mockResolvedValue(mockGameState);

    await performAction(mockAction);

    expect(mockAction).toHaveBeenCalledWith(uiState.gameId);
    expect(updateUI).toHaveBeenCalledWith(mockGameState);
    expect(checkWinner).toHaveBeenCalledWith(mockGameState);
  });

  it('should handle errors thrown during the execution of the action', async () => {
    uiState.gameId = '1234';
    const mockError = new Error('Test error');
    mockAction.mockRejectedValue(mockError);

    await performAction(mockAction);

    expect(mockAction).toHaveBeenCalledWith(uiState.gameId);
    expect(handleError).toHaveBeenCalledWith(
      'Error performing action:',
      mockError,
    );
  });
});
