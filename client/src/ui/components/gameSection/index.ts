import './styles.css';
import { setupGameTable } from '../gameTable';
import { setupDealerSection } from '../dealerSection';
import { setupPlayerSection } from '../playerSection';

/**
 * Sets up the game section of the game.
 * This includes setting up the dealer section, game table section, and player section.
 *
 * @param {HTMLElement} element - The parent element to which the game section elements will be appended.
 */
export function setupGameSection(element: HTMLElement) {
  if (!element) return;

  ['dealer-section', 'gameTable-section', 'player-section'].forEach((id) => {
    const existingSection = element.querySelector(`#${id}`);
    existingSection?.remove();

    const newSection = document.createElement('section');
    newSection.id = id;
    element.append(newSection);

    switch (id) {
      case 'dealer-section':
        // Set up the dealer section
        setupDealerSection(newSection);
        break;
      case 'gameTable-section':
        // Set up the game table section
        setupGameTable(newSection);
        break;
      case 'player-section':
        // Set up the player section
        setupPlayerSection(newSection);
        break;
    }
  });
}
