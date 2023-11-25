import { expect, describe, beforeEach, it } from 'vitest';
import { setupGameSection } from './index.ts';

describe('setupGameSection', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('should correctly setup dealer section, game table section, and player section when called with a valid element', () => {
    setupGameSection(container);

    const dealerSection = container.querySelector('#dealer-section');
    const gameTableSection = container.querySelector('#gameTable-section');
    const playerSection = container.querySelector('#player-section');

    expect(dealerSection).not.toBeNull();
    expect(gameTableSection).not.toBeNull();
    expect(playerSection).not.toBeNull();
  });

  it('should not throw an error when called with a null element', () => {
    expect(() =>
      setupGameSection(null as unknown as HTMLElement),
    ).not.toThrow();
  });

  it('should not append any sections when called with a null element', () => {
    setupGameSection(null as unknown as HTMLElement);

    const dealerSection = container.querySelector('#dealer-section');
    const gameTableSection = container.querySelector('#gameTable-section');
    const playerSection = container.querySelector('#player-section');

    expect(dealerSection).toBeNull();
    expect(gameTableSection).toBeNull();
    expect(playerSection).toBeNull();
  });

  it('should append sections even if the provided element is already populated', () => {
    const initialDiv = document.createElement('div');
    container.append(initialDiv);

    setupGameSection(container);

    const appendedSections = container.querySelectorAll('section');

    expect(appendedSections.length).toEqual(3);
  });

  it('should not append sections if the provided element already contains sections with the same IDs', () => {
    const initialSection1 = document.createElement('section');
    initialSection1.id = 'dealer-section';
    const initialSection2 = document.createElement('section');
    initialSection2.id = 'gameTable-section';
    const initialSection3 = document.createElement('section');
    initialSection3.id = 'player-section';
    container.append(initialSection1, initialSection2, initialSection3);

    setupGameSection(container);

    const appendedSections = container.querySelectorAll('section');

    expect(appendedSections.length).toEqual(3);
  });
});
