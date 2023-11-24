import { expect, describe, beforeEach, it, vi, Mock,afterEach } from 'vitest';
import { startGame } from '.';
import * as services from '../../services';
import * as state from '../../state';
import * as utils from '../../utils';

vi.mock('../../services');
vi.mock('../../state');
vi.mock('../../utils');

describe('startGame function', () => {
    let mockCreateGame: Mock;
    let mockUpdateUI: Mock;
    let mockHandleError: Mock;

    beforeEach(() => {
        mockCreateGame = vi.fn();
        mockUpdateUI = vi.fn();
        mockHandleError = vi.fn();

        vi.spyOn(services, 'createGame').mockImplementation(mockCreateGame);
        vi.spyOn(state, 'updateUI').mockImplementation(mockUpdateUI);
        vi.spyOn(utils, 'handleError').mockImplementation(mockHandleError);
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it('starts a new game successfully', async () => {
        const mockGame = { gameId: '1', gameState: {} };
        mockCreateGame.mockResolvedValueOnce(mockGame);

        await startGame();

        expect(mockCreateGame).toHaveBeenCalled();
        expect(state.uiState.gameId).toEqual(mockGame.gameId);
        expect(mockUpdateUI).toHaveBeenCalledWith(mockGame.gameState);
    });

    it('handles error when starting a new game fails', async () => {
        const mockError = new Error('Network error');
        mockCreateGame.mockRejectedValueOnce(mockError);

        await startGame();

        expect(mockCreateGame).toHaveBeenCalled();
        expect(mockHandleError).toHaveBeenCalledWith('Error starting the game:', mockError);
    });
});