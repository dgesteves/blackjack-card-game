import request from 'supertest';
import express from 'express';
import { gameExists, games } from '.';
import { BlackjackGame } from '../controllers/blackjackGame';
import { Deck } from '../controllers/deck';
import { Card } from '../controllers/card';

const app = express();
app.get('/:gameId', gameExists, (req, res) =>
  res.status(200).json({ message: 'Game exists' })
);
describe('gameExists middleware', () => {
  beforeAll(() => {
    games['testGameId'] = {
      deck: {} as Deck,
      playerHand: [] as Card[],
      dealerHand: [] as Card[],
      playerPoints: 0,
      dealerPoints: 0,
    } as BlackjackGame;
  });

  it('should return 200 if game exists', async () => {
    const res = await request(app).get('/testGameId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Game exists');
  });

  it('should return 404 if game does not exist', async () => {
    const res = await request(app).get('/nonExistentGameId');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error', 'Game not found');
  });
});
