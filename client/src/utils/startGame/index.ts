import { createGame } from '../../services';
import { handleError } from '../handleError';
import { uiState, updateUI } from '../updateUI';

/**
 * Starts a new game by calling the createGame function from the services module.
 *
 * This function updates the global uiState with the ID of the new game and updates the user interface
 * with the initial game state. If an error occurs during the creation of the game, it is handled by
 * the index function from the utils module.
 *
 * @async
 * @function
 * @throws Will throw an error if the createGame function throws an error.
 */
export async function startGame() {
  try {
    const { gameId, gameState } = await createGame();
    uiState.gameId = gameId;
    updateUI(gameState);
  } catch (error) {
    handleError(
      'Error starting the game:',
      error instanceof Error ? error : undefined,
    );
  }
}
