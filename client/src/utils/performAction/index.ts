import { GameState } from '../../types';
import { checkWinner } from '../checkWinner';
import { handleError } from '../handleError';
import { uiState, updateUI } from '../updateUI';

/**
 * Performs a game action (hit or stand) by calling the provided action function.
 *
 * This function first checks if a game has been started by checking if the gameId in the global uiState is set.
 * If a game has not been started, it logs an error message to the console and returns.
 * If a game has been started, it calls the provided action function with the gameId as an argument.
 * The action function is expected to return a promise that resolves to the new game state after the action.
 * The function then updates the user interface with the new game state and checks if there is a winner.
 * If an error occurs during the execution of the action function, it is handled by the index function from the utils module.
 *
 * @async
 * @function
 * @param {function} action - The function to perform the game action. This function should take the gameId as an argument and return a promise that resolves to the new game state.
 * @throws Will throw an error if the action function throws an error.
 */
export async function performAction(
  action: (gameId: string) => Promise<GameState>,
) {
  if (!uiState.gameId) {
    console.error('Game not started');
    return;
  }

  try {
    const gameState = await action(uiState.gameId);
    updateUI(gameState);
    checkWinner(gameState);
  } catch (error) {
    handleError(
      'Error performing action:',
      error instanceof Error ? error : undefined,
    );
  }
}
