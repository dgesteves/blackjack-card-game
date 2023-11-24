import { Request, Response, NextFunction } from 'express';
import { Games } from '../types';

/**
 * @type {Games}
 * @description An object to store all the active games.
 */
export const games: Games = {};

/**
 * Middleware function to check if a game exists.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void}
 */
export const gameExists = (req: Request, res: Response, next: NextFunction) => {
  const { gameId } = req.params;
  if (!games[gameId]) {
    return res.status(404).json({ error: 'Game not found' });
  }
  next();
};
