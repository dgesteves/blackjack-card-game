import { expect, describe, beforeEach, it } from 'vitest';
import { setupDealerSection } from '.';
import { DEALER_POINTS_ID } from '../../../constants';

describe('setupDealerSection', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('should correctly setup dealer image and points badge when called with a valid element', () => {
    setupDealerSection(container);

    const dealerImg = container.querySelector('img');
    const dealerPointsBadge = container.querySelector(`#${DEALER_POINTS_ID}`);

    expect(dealerImg).not.toBeNull();
    expect(dealerPointsBadge).not.toBeNull();
  });

  it('should not throw an error when called with a null element', () => {
    expect(() =>
      setupDealerSection(null as unknown as HTMLElement),
    ).not.toThrow();
  });

  it('should not append any elements when called with a null element', () => {
    setupDealerSection(null as unknown as HTMLElement);

    const dealerImg = container.querySelector('img');
    const dealerPointsBadge = container.querySelector(`#${DEALER_POINTS_ID}`);

    expect(dealerImg).toBeNull();
    expect(dealerPointsBadge).toBeNull();
  });

  it('should append elements even if the provided element is already populated', () => {
    const initialDiv = document.createElement('div');
    container.append(initialDiv);

    setupDealerSection(container);

    const appendedElements = container.querySelectorAll('*');

    expect(appendedElements.length).toEqual(3);
  });

  it('should not append elements if the provided element already contains elements with the same IDs', () => {
    const initialImg = document.createElement('img');
    initialImg.id = 'dealer-img';
    const initialBadge = document.createElement('div');
    initialBadge.id = DEALER_POINTS_ID;
    container.append(initialImg, initialBadge);

    setupDealerSection(container);

    const appendedElements = container.querySelectorAll('*');

    expect(appendedElements.length).toEqual(2);
  });
});
