import { Router, Request, Response } from 'express';
import { generateGameId } from '../utils';
import { BlackjackGame } from '../controllers/blackjackGame';
import { gameExists, games } from '../middleware';

const router = Router();

/**
 * POST /start
 * Starts a new game of Blackjack.
 * Generates a unique game ID and initializes a new game.
 * Responds with the game ID and the initial game state.
 */
router.post('/start', (req: Request, res: Response) => {
  const gameId = generateGameId();
  games[gameId] = new BlackjackGame();
  res.json({ gameId, gameState: games[gameId].startGame() });
});

/**
 * POST /hit/:gameId
 * Performs a "hit" action in the game with the specified ID.
 * The game must exist, or the request will be rejected.
 * Responds with the new game state after the hit.
 */
router.post('/hit/:gameId', gameExists, (req: Request, res: Response) => {
  const { gameId } = req.params;
  res.json(games[gameId].hit());
});

/**
 * POST /stand/:gameId
 * Performs a "stand" action in the game with the specified ID.
 * The game must exist, or the request will be rejected.
 * Responds with the new game state after the stand, and then deletes the game.
 */
router.post('/stand/:gameId', gameExists, (req: Request, res: Response) => {
  const { gameId } = req.params;
  res.json(games[gameId].stand());
  delete games[gameId];
});

export { router as gameRouter };
