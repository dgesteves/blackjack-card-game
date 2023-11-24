import { GameState } from '../../types';
import { Deck } from '../deck';
import { Card } from '../card';

export class BlackjackGame {
  deck: Deck;
  playerHand: Card[];
  dealerHand: Card[];
  playerPoints: number;
  dealerPoints: number;

  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();

    this.playerHand = [];
    this.dealerHand = [];

    this.playerPoints = 0;
    this.dealerPoints = 0;
  }

  startGame(): GameState {
    const card1 = this.deck.dealCard();
    const card2 = this.deck.dealCard();
    const card3 = this.deck.dealCard();
    const card4 = this.deck.dealCard();

    this.playerHand = [card1, card2];
    this.dealerHand = [card3, card4];

    this.calculatePoints();
    return this.getGameState();
  }

  hit(): GameState {
    const card = this.deck.dealCard();

    this.playerHand.push(card);
    this.calculatePoints();

    if (this.playerPoints > 21) {
      return this.endGame('Dealer');
    }

    return this.getGameState();
  }

  stand(): GameState {
    let card: Card;
    while (this.dealerPoints < 17) {
      card = this.deck.dealCard();

      this.dealerHand.push(card);
      this.calculatePoints();
    }

    return this.endGame(this.determineWinner());
  }

  calculatePoints(): void {
    this.playerPoints = this.calculateHandPoints(this.playerHand);
    this.dealerPoints = this.calculateHandPoints(this.dealerHand);
  }

  calculateHandPoints(hand: Card[]): number {
    let points = hand.reduce((total, card) => total + card.value, 0);

    for (const card of hand) {
      if (card.rank === 'A' && points > 21) {
        points -= 10;
      }
    }

    return points;
  }

  determineWinner(): string {
    if (this.playerPoints > 21) return 'Dealer';
    if (this.dealerPoints > 21) return 'Player';

    return this.playerPoints > this.dealerPoints ? 'Player' : 'Dealer';
  }

  endGame(winner: string): GameState {
    const gameState = this.getGameState();
    gameState.winner = winner;
    gameState.dealerHand = this.dealerHand;
    gameState.dealerPoints = this.calculateHandPoints(this.dealerHand);
    return gameState;
  }

  getGameState(): GameState {
    return {
      playerHand: this.playerHand,
      playerPoints: this.playerPoints,
      dealerHand: this.dealerHand.slice(0, 1),
      dealerPoints: this.dealerHand[0].value,
    };
  }
}
