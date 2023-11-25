import { beforeEach, describe, expect, it, vi } from 'vitest';
import { updateUI } from '.';
import { GameState, Rank, Suit } from '../../types';
import * as updateHandModule from '../updateHand';
import * as updateElementTextModule from '../updateElementText';
import * as updateResultTextModule from '../updateResultText';
import * as updateButtonModule from '../updateButton';
import {
  DEALER_HAND_ID,
  DEALER_POINTS_ID,
  PLAYER_HAND_ID,
  PLAYER_POINTS_ID,
} from '../../constants';

vi.mock('../updateHand');
vi.mock('../updateElementText');
vi.mock('../updateResultText');
vi.mock('../updateButton');

describe('updateUI', () => {
  const mockUpdateHand = vi.spyOn(updateHandModule, 'updateHand');
  const mockUpdateElementText = vi.spyOn(
    updateElementTextModule,
    'updateElementText',
  );
  const mockUpdateResultText = vi.spyOn(
    updateResultTextModule,
    'updateResultText',
  );
  const mockUpdateButton = vi.spyOn(updateButtonModule, 'updateButton');

  beforeEach(() => {
    mockUpdateHand.mockClear();
    mockUpdateElementText.mockClear();
    mockUpdateResultText.mockClear();
    mockUpdateButton.mockClear();
  });

  it('updates UI correctly when game is in progress', () => {
    const gameState: GameState = {
      playerHand: [
        {
          suit: Suit.Clubs,
          rank: Rank.Ace,
          value: 11,
        },
        {
          suit: Suit.Spades,
          rank: Rank.Four,
          value: 4,
        },
      ],
      playerPoints: 15,
      dealerHand: [
        {
          suit: Suit.Hearts,
          rank: Rank.Two,
          value: 2,
        },
      ],
      dealerPoints: 2,
      winner: '',
    };

    updateUI(gameState);

    expect(mockUpdateHand).toHaveBeenCalledWith(
      PLAYER_HAND_ID,
      gameState.playerHand,
      '',
    );
    expect(mockUpdateElementText).toHaveBeenCalledWith(
      PLAYER_POINTS_ID,
      gameState.playerPoints.toString(),
      'Player Points:',
    );
    expect(mockUpdateHand).toHaveBeenCalledWith(
      DEALER_HAND_ID,
      gameState.dealerHand,
      '',
    );
    expect(mockUpdateElementText).toHaveBeenCalledWith(
      DEALER_POINTS_ID,
      gameState.dealerPoints.toString(),
      'Dealer Visible Points:',
    );
    expect(mockUpdateResultText).toHaveBeenCalledWith(gameState);
    expect(mockUpdateButton).toHaveBeenCalledWith('hit', gameState);
    expect(mockUpdateButton).toHaveBeenCalledWith('stand', gameState);
  });

  it('updates UI correctly when player wins', () => {
    const gameState: GameState = {
      playerHand: [
        {
          suit: Suit.Clubs,
          rank: Rank.Ace,
          value: 11,
        },
        {
          suit: Suit.Spades,
          rank: Rank.King,
          value: 10,
        },
      ],
      playerPoints: 21,
      dealerHand: [
        {
          suit: Suit.Hearts,
          rank: Rank.Ten,
          value: 10,
        },
      ],
      dealerPoints: 10,
      winner: 'Player',
    };

    updateUI(gameState);

    expect(mockUpdateHand).toHaveBeenCalledWith(
      PLAYER_HAND_ID,
      gameState.playerHand,
      'Player',
    );
    expect(mockUpdateElementText).toHaveBeenCalledWith(
      PLAYER_POINTS_ID,
      gameState.playerPoints.toString(),
      'Player Points:',
    );
    expect(mockUpdateHand).toHaveBeenCalledWith(
      DEALER_HAND_ID,
      gameState.dealerHand,
      'Player',
    );
    expect(mockUpdateElementText).toHaveBeenCalledWith(
      DEALER_POINTS_ID,
      gameState.dealerPoints.toString(),
      'Dealer Visible Points:',
    );
    expect(mockUpdateResultText).toHaveBeenCalledWith(gameState);
    expect(mockUpdateButton).toHaveBeenCalledWith('hit', gameState);
    expect(mockUpdateButton).toHaveBeenCalledWith('stand', gameState);
  });

  it('updates UI correctly when dealer wins', () => {
    const gameState: GameState = {
      playerHand: [
        {
          suit: Suit.Clubs,
          rank: Rank.Four,
          value: 4,
        },
        {
          suit: Suit.Spades,
          rank: Rank.King,
          value: 10,
        },
      ],
      playerPoints: 14,
      dealerHand: [
        {
          suit: Suit.Clubs,
          rank: Rank.Ace,
          value: 11,
        },
        {
          suit: Suit.Spades,
          rank: Rank.King,
          value: 10,
        },
      ],
      dealerPoints: 21,
      winner: 'Dealer',
    };

    updateUI(gameState);

    expect(mockUpdateHand).toHaveBeenCalledWith(
      PLAYER_HAND_ID,
      gameState.playerHand,
      'Dealer',
    );
    expect(mockUpdateElementText).toHaveBeenCalledWith(
      PLAYER_POINTS_ID,
      gameState.playerPoints.toString(),
      'Player Points:',
    );
    expect(mockUpdateHand).toHaveBeenCalledWith(
      DEALER_HAND_ID,
      gameState.dealerHand,
      'Dealer',
    );
    expect(mockUpdateElementText).toHaveBeenCalledWith(
      DEALER_POINTS_ID,
      gameState.dealerPoints.toString(),
      'Dealer Visible Points:',
    );
    expect(mockUpdateResultText).toHaveBeenCalledWith(gameState);
    expect(mockUpdateButton).toHaveBeenCalledWith('hit', gameState);
    expect(mockUpdateButton).toHaveBeenCalledWith('stand', gameState);
  });
});
