import { GameState } from '../../types';
import { Deck } from '../deck';
import { Card } from '../card';

/**
 * Class representing a Blackjack game
 */
export class BlackjackGame {
  deck: Deck; // The deck of cards for the game
  playerHand: Card[]; // The player's hand
  dealerHand: Card[]; // The dealer's hand
  playerPoints: number; // The player's points
  dealerPoints: number; // The dealer's points

  /**
   * BlackjackGame constructor
   * Initializes a new game of Blackjack
   */
  constructor() {
    this.deck = new Deck(); // Create a new deck of cards
    this.deck.shuffle(); // Shuffle the deck
    this.playerHand = []; // Initialize the player's hand
    this.dealerHand = []; // Initialize the dealer's hand

    this.playerPoints = 0; // Initialize the player's points
    this.dealerPoints = 0; // Initialize the dealer's points
  }

  /**
   * Function to start the game
   * @returns {GameState} The initial state of the game
   */
  startGame(): GameState {
    // Deal four cards from the deck
    const card1 = this.deck.dealCard();
    const card2 = this.deck.dealCard();
    const card3 = this.deck.dealCard();
    const card4 = this.deck.dealCard();

    // Assign two cards to the player and two to the dealer
    this.playerHand = [card1, card2];
    this.dealerHand = [card3, card4];

    // Calculate the points for each hand
    this.calculatePoints();
    // Return the initial game state
    return this.getGameState();
  }

  /**
   * Function for the player to hit (request another card)
   * @returns {GameState} The updated state of the game
   */
  hit(): GameState {
    // Deal a card from the deck
    const card = this.deck.dealCard();

    // Add the card to the player's hand
    this.playerHand.push(card);
    // Calculate the points for each hand
    this.calculatePoints();

    // If the player's points exceed 21, end the game with the dealer as the winner
    if (this.playerPoints > 21) {
      return this.endGame('Dealer');
    }

    // Return the updated game state
    return this.getGameState();
  }

  /**
   * Function for the player to stand (stop requesting cards)
   * @returns {GameState} The final state of the game
   */
  stand(): GameState {
    let card: Card;
    // While the dealer's points are less than 17, deal another card
    while (this.dealerPoints < 17) {
      card = this.deck.dealCard();

      // Add the card to the dealer's hand
      this.dealerHand.push(card);
      // Calculate the points for each hand
      this.calculatePoints();
    }

    // End the game and determine the winner
    return this.endGame(this.determineWinner());
  }

  /**
   * Function to calculate the points for each hand
   */
  calculatePoints(): void {
    // Calculate the points for the player's hand
    this.playerPoints = this.calculateHandPoints(this.playerHand);
    // Calculate the points for the dealer's hand
    this.dealerPoints = this.calculateHandPoints(this.dealerHand);
  }

  /**
   * Function to calculate the points for a hand
   * @param {Card[]} hand - The hand to calculate points for
   * @returns {number} The total points of the hand
   */
  calculateHandPoints(hand: Card[]): number {
    // Calculate the initial points by summing the values of the cards
    let points = hand.reduce((total, card) => total + card.value, 0);

    // If the hand contains an Ace and the points exceed 21, subtract 10 points
    for (const card of hand) {
      if (card.rank === 'A' && points > 21) {
        points -= 10;
      }
    }

    // Return the final points
    return points;
  }

  /**
   * Function to determine the winner of the game
   * @returns {string} The winner of the game ('Player' or 'Dealer')
   */
  determineWinner(): string {
    // If the player's points exceed 21, the dealer wins
    if (this.playerPoints > 21) return 'Dealer';
    // If the dealer's points exceed 21, the player wins
    if (this.dealerPoints > 21) return 'Player';

    // If neither player has exceeded 21, the player with the most points wins
    return this.playerPoints > this.dealerPoints ? 'Player' : 'Dealer';
  }

  /**
   * Function to end the game
   * @param {string} winner - The winner of the game
   * @returns {GameState} The final state of the game
   */
  endGame(winner: string): GameState {
    // Get the current game state
    const gameState = this.getGameState();
    // Set the winner
    gameState.winner = winner;
    // Reveal the dealer's hand
    gameState.dealerHand = this.dealerHand;
    // Calculate the dealer's points
    gameState.dealerPoints = this.calculateHandPoints(this.dealerHand);
    // Return the final game state
    return gameState;
  }

  /**
   * Function to get the current state of the game
   * @returns {GameState} The current state of the game
   */
  getGameState(): GameState {
    // Return the current state of the game
    return {
      playerHand: this.playerHand,
      playerPoints: this.playerPoints,
      dealerHand: this.dealerHand.slice(0, 1),
      dealerPoints: this.dealerHand[0].value,
    };
  }
}
