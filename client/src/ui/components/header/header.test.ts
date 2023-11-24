import { expect, describe, beforeEach, it } from 'vitest';
import { setupHeader } from '.';
import { JSDOM } from 'jsdom';

describe('setupHeader', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const dom = new JSDOM();
    const document = dom.window.document;
    container = document.createElement('div');
  });

  it('should append section and start game button to the provided element', () => {
    setupHeader(container);

    const section = container.querySelector('section');
    const startGameButton = container.querySelector('#start-game');

    expect(section).to.exist;
    expect(startGameButton).to.exist;
  });

  it('should setup section with correct child elements', () => {
    setupHeader(container);

    const logoJack = container.querySelector('#logo-jack');
    const logoAce = container.querySelector('#logo-ace');
    const title = container.querySelector('h1');

    expect(logoJack).to.exist;
    expect(logoAce).to.exist;
    expect(title).to.exist;
  });

  it('should not append elements if the provided element is null', () => {
    setupHeader(null as unknown as HTMLElement);

    const section = container.querySelector('section');
    const startGameButton = container.querySelector('#start-game');

    expect(section).to.not.exist;
    expect(startGameButton).to.not.exist;
  });

  it('should correctly setup section and start game button when called multiple times with the same element', () => {
    setupHeader(container);
    setupHeader(container);

    const sections = container.querySelectorAll('section');
    const startGameButtons = container.querySelectorAll('#start-game');

    expect(sections.length).to.equal(1);
    expect(startGameButtons.length).to.equal(1);
  });

  it('should correctly setup section and start game button when called with different elements', () => {
    const anotherContainer = document.createElement('div');
    setupHeader(container);
    setupHeader(anotherContainer);

    const section = container.querySelector('section');
    const startGameButton = container.querySelector('#start-game');

    const anotherSection = anotherContainer.querySelector('section');
    const anotherStartGameButton =
      anotherContainer.querySelector('#start-game');

    expect(section).to.exist;
    expect(startGameButton).to.exist;

    expect(anotherSection).to.exist;
    expect(anotherStartGameButton).to.exist;
  });
});
