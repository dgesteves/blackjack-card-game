import { expect, describe, beforeEach, it } from 'vitest';
import { setupGameTable } from './index.ts';
import { DEALER_HAND_ID, PLAYER_HAND_ID, RESULT_ID } from '../../constants';

describe('setupGameTable', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('should correctly setup dealer hand, result, and player hand divs when called with a valid element', () => {
    setupGameTable(container);

    const dealerHandDiv = container.querySelector(`#${DEALER_HAND_ID}`);
    const resultDiv = container.querySelector(`#${RESULT_ID}`);
    const playerHandDiv = container.querySelector(`#${PLAYER_HAND_ID}`);

    expect(dealerHandDiv).not.toBeNull();
    expect(resultDiv).not.toBeNull();
    expect(playerHandDiv).not.toBeNull();
  });

  it('should not throw an error when called with a null element', () => {
    expect(() => setupGameTable(null as unknown as HTMLElement)).not.toThrow();
  });

  it('should not append any divs when called with a null element', () => {
    setupGameTable(null as unknown as HTMLElement);

    const dealerHandDiv = container.querySelector(`#${DEALER_HAND_ID}`);
    const resultDiv = container.querySelector(`#${RESULT_ID}`);
    const playerHandDiv = container.querySelector(`#${PLAYER_HAND_ID}`);

    expect(dealerHandDiv).toBeNull();
    expect(resultDiv).toBeNull();
    expect(playerHandDiv).toBeNull();
  });

  it('should append divs to the provided element', () => {
    setupGameTable(container);

    const appendedDivs = container.querySelectorAll('div');

    expect(appendedDivs.length).toEqual(3);
  });

  it('should append divs even if the provided element is already populated', () => {
    const initialDiv = document.createElement('div');
    container.append(initialDiv);

    setupGameTable(container);

    const appendedDivs = container.querySelectorAll('div');

    expect(appendedDivs.length).toEqual(3);
  });

  it('should create divs with the correct IDs', () => {
    setupGameTable(container);

    const dealerHandDiv = container.querySelector(`#${DEALER_HAND_ID}`);
    const resultDiv = container.querySelector(`#${RESULT_ID}`);
    const playerHandDiv = container.querySelector(`#${PLAYER_HAND_ID}`);

    expect(dealerHandDiv?.id).toEqual(DEALER_HAND_ID);
    expect(resultDiv?.id).toEqual(RESULT_ID);
    expect(playerHandDiv?.id).toEqual(PLAYER_HAND_ID);
  });
});
