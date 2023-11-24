import {expect, describe, it, beforeEach, vi, Mock,afterEach} from 'vitest';
import { createGame, createHit, createStand } from '.';
import { GameState } from '../types';
import {BASE_URL} from "../constants";

describe('Game services', () => {
    let mockFetch: Mock;

    beforeEach(() => {
        mockFetch = vi.fn();
        global.fetch = mockFetch as unknown as typeof fetch;
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it('creates a new game successfully', async () => {
        const mockGame = { gameId: '1', gameState: {} as GameState };
        mockFetch.mockResolvedValueOnce({
            json: async () => mockGame,
        });

        const result = await createGame();

        expect(result).toEqual(mockGame);
        expect(mockFetch).toHaveBeenCalledWith(`${BASE_URL}/start`, { method: 'POST' });
    });

    it('performs a hit action successfully', async () => {
        const mockGameState = {} as GameState;
        const gameId = '1';
        mockFetch.mockResolvedValueOnce({
            json: async () => mockGameState,
        });

        const result = await createHit(gameId);

        expect(result).toEqual(mockGameState);
        expect(mockFetch).toHaveBeenCalledWith(`${BASE_URL}/hit/${gameId}`, { method: 'POST' });
    });

    it('performs a stand action successfully', async () => {
        const mockGameState = {} as GameState;
        const gameId = '1';
        mockFetch.mockResolvedValueOnce({
            json: async () => mockGameState,
        });

        const result = await createStand(gameId);

        expect(result).toEqual(mockGameState);
        expect(mockFetch).toHaveBeenCalledWith(`${BASE_URL}/stand/${gameId}`, { method: 'POST' });
    });

    it('throws an error when creating a game fails', async () => {
        mockFetch.mockRejectedValueOnce(new Error('Network error'));

        await expect(createGame()).rejects.toThrow('Network error');
    });

    it('throws an error when performing a hit action fails', async () => {
        const gameId = '1';
        mockFetch.mockRejectedValueOnce(new Error('Network error'));

        await expect(createHit(gameId)).rejects.toThrow('Network error');
    });

    it('throws an error when performing a stand action fails', async () => {
        const gameId = '1';
        mockFetch.mockRejectedValueOnce(new Error('Network error'));

        await expect(createStand(gameId)).rejects.toThrow('Network error');
    });
});