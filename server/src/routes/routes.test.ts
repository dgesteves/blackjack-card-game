import request from 'supertest';
import express from 'express';
import { gameRouter } from '.';

const app = express();
app.use(express.json());
app.use(gameRouter);

describe('POST /start', () => {
  it('should start a new game and return a game ID and initial game state', async () => {
    const res = await request(app).post('/start');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('gameId');
    expect(res.body).toHaveProperty('gameState');
  });
});

describe('POST /hit/:gameId', () => {
  it('should return an updated game state when a valid game ID is provided', async () => {
    const startRes = await request(app).post('/start');
    const gameId = startRes.body.gameId;

    const hitRes = await request(app).post(`/hit/${gameId}`);
    expect(hitRes.statusCode).toEqual(200);
    expect(hitRes.body).toHaveProperty('playerHand');
    expect(hitRes.body).toHaveProperty('playerPoints');
    expect(hitRes.body).toHaveProperty('dealerHand');
    expect(hitRes.body).toHaveProperty('dealerPoints');
  });

  it('should return a 404 error when an invalid game ID is provided', async () => {
    const res = await request(app).post('/hit/invalidGameId');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ error: 'Game not found' });
  });
});

describe('POST /stand/:gameId', () => {
  it('should return a final game state and remove the game from memory when a valid game ID is provided', async () => {
    const startRes = await request(app).post('/start');
    const gameId = startRes.body.gameId;

    const standRes = await request(app).post(`/stand/${gameId}`);
    expect(standRes.statusCode).toEqual(200);
    expect(standRes.body).toHaveProperty('playerHand');
    expect(standRes.body).toHaveProperty('playerPoints');
    expect(standRes.body).toHaveProperty('dealerHand');
    expect(standRes.body).toHaveProperty('dealerPoints');
    expect(standRes.body).toHaveProperty('winner');

    const hitResAfterStand = await request(app).post(`/hit/${gameId}`);
    expect(hitResAfterStand.statusCode).toEqual(404);
  });

  it('should return a 404 error when an invalid game ID is provided', async () => {
    const res = await request(app).post('/stand/invalidGameId');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ error: 'Game not found' });
  });
});
