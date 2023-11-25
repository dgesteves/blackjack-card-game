import { BlackjackGame } from '.';
import {GameState, Rank, Suit} from '../../types';
import { Card } from '../card';

describe('BlackjackGame', () => {
  let game: BlackjackGame;

  beforeEach(() => {
    game = new BlackjackGame();
  });

  it('should start a new game with two cards each for player and dealer but dealer second card is hidden', () => {
    const gameState = game.startGame();
    expect(gameState.playerHand.length).toBe(2);
    expect(game.dealerHand.length).toBe(2);
    expect(gameState.dealerHand.length).toBe(1);
  });

  it('should calculate correct points for player and dealer', () => {
    game.startGame();
    const playerPoints = game.playerHand.reduce(
      (total, card) => total + card.value,
      0
    );
    const dealerPoints = game.dealerHand.reduce(
      (total, card) => total + card.value,
      0
    );
    expect(game.playerPoints).toBe(playerPoints);
    expect(game.dealerPoints).toBe(dealerPoints);
  });

  it('should allow player to hit and receive a card', () => {
    game.startGame();
    const initialHandSize = game.playerHand.length;
    game.hit();
    expect(game.playerHand.length).toBe(initialHandSize + 1);
  });

  it('should end the game if player hits and points exceed 21', () => {
    game.startGame();
    game.playerHand = [
      new Card(Suit.Hearts, Rank.King),
      new Card(Suit.Diamonds, Rank.King),
      new Card(Suit.Clubs, Rank.Five),
    ];
    game.calculatePoints();
    const gameState = game.hit();
    expect(gameState.winner).toBe('Dealer');
  });

  it('should allow player to stand and dealer to hit until points reach 17 or more', () => {
    game.startGame();
    game.dealerHand = [
      new Card(Suit.Hearts, Rank.Two),
      new Card(Suit.Diamonds, Rank.Two),
    ];
    game.calculatePoints();
    game.stand();
    expect(game.dealerPoints).toBeGreaterThanOrEqual(17);
  });

  it('should determine the correct winner', () => {
    game.startGame();
    game.playerHand = [
      new Card(Suit.Hearts, Rank.King),
      new Card(Suit.Diamonds, Rank.Nine),
    ];
    game.dealerHand = [
      new Card(Suit.Clubs, Rank.King),
      new Card(Suit.Spades, Rank.Eight),
    ];
    game.calculatePoints();
    game.stand();
    expect(game.determineWinner()).toBe('Player');
  });

  it('should end the game with player as winner if dealer hits and points exceed 21', () => {
    game.startGame();
    game.dealerHand = [
      new Card(Suit.Hearts, Rank.King),
      new Card(Suit.Diamonds, Rank.Five),
    ];
    game.calculatePoints();
    // Mock the deck to return a card with value 10
    jest
      .spyOn(game.deck, 'dealCard')
      .mockReturnValue(new Card(Suit.Clubs, Rank.King));
    const gameState = game.stand();
    expect(gameState.winner).toBe('Player');
  });

  it('should end the game with dealer as winner if player hits and points exceed 21', () => {
    game.startGame();
    // Mock the deck to return cards with value 10
    jest
      .spyOn(game.deck, 'dealCard')
      .mockReturnValue(new Card(Suit.Clubs, Rank.King));
    let gameState:GameState;
    while (game.playerPoints <= 21) {
      gameState = game.hit();
    }
    expect(gameState.winner).toBe('Dealer');
  });

  it('should correctly calculate points when hand contains an Ace and points exceed 21', () => {
    game.startGame();
    game.playerHand = [
      new Card(Suit.Hearts, Rank.Ace),
      new Card(Suit.Diamonds, Rank.King),
      new Card(Suit.Clubs, Rank.Four),
    ];
    game.calculatePoints();
    expect(game.playerPoints).toBe(15);
  });
});
