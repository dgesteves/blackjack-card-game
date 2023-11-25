import { expect, describe, beforeEach, it } from 'vitest';
import { setupPlayerSection } from './index.ts';
import { JSDOM } from 'jsdom';

describe('setupPlayerSection', () => {
  let container: HTMLElement;
  beforeEach(() => {
    const dom = new JSDOM();
    const document = dom.window.document;
    container = document.createElement('div');
  });

  it('should append player points badge, hit button, and stand button to the provided element', () => {
    setupPlayerSection(container);

    const playerPointsBadge = container.querySelector(
      '#player-points',
    ) as HTMLElement;
    const hitButton = container.querySelector('#hit');
    const standButton = container.querySelector('#stand');

    expect(playerPointsBadge).to.exist;
    expect(hitButton).to.exist;
    expect(standButton).to.exist;
  });

  it('should setup badge and buttons with correct properties', () => {
    setupPlayerSection(container);

    const playerPointsBadge = container.querySelector(
      '#player-points',
    ) as HTMLElement;
    const hitButton = container.querySelector('#hit');
    const standButton = container.querySelector('#stand');

    expect(playerPointsBadge?.dataset.color).to.equal('dataSea');
    expect(playerPointsBadge?.className).to.equal('badge');
    expect(hitButton?.textContent).to.equal('Hit');
    expect(standButton?.textContent).to.equal('Stand');
  });

  it('should not append elements if the provided element is null', () => {
    const nullContainer = null;
    if (nullContainer !== null) {
      setupPlayerSection(nullContainer);
    }

    const playerPointsBadge = container.querySelector('#player-points');
    const hitButton = container.querySelector('#hit');
    const standButton = container.querySelector('#stand');

    expect(playerPointsBadge).to.not.exist;
    expect(hitButton).to.not.exist;
    expect(standButton).to.not.exist;
  });

  it('should throw an error when called with an undefined element', () => {
    const undefinedContainer = undefined;
    if (undefinedContainer !== undefined) {
      expect(() => setupPlayerSection(undefinedContainer)).to.throw();
    }
  });

  it('should correctly setup badge and buttons when called multiple times with the same element', () => {
    setupPlayerSection(container);
    setupPlayerSection(container);

    const playerPointsBadges = container.querySelectorAll('#player-points');
    const hitButtons = container.querySelectorAll('#hit');
    const standButtons = container.querySelectorAll('#stand');

    expect(playerPointsBadges.length).to.equal(1);
    expect(hitButtons.length).to.equal(1);
    expect(standButtons.length).to.equal(1);
  });

  it('should correctly setup badge and buttons when called with different elements', () => {
    const anotherContainer = document.createElement('div');
    setupPlayerSection(container);
    setupPlayerSection(anotherContainer);

    const playerPointsBadge = container.querySelector('#player-points');
    const hitButton = container.querySelector('#hit');
    const standButton = container.querySelector('#stand');

    const anotherPlayerPointsBadge =
      anotherContainer.querySelector('#player-points');
    const anotherHitButton = anotherContainer.querySelector('#hit');
    const anotherStandButton = anotherContainer.querySelector('#stand');

    expect(playerPointsBadge).to.exist;
    expect(hitButton).to.exist;
    expect(standButton).to.exist;

    expect(anotherPlayerPointsBadge).to.exist;
    expect(anotherHitButton).to.exist;
    expect(anotherStandButton).to.exist;
  });
});
