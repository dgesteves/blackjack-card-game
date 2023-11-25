import './styles.css';
import {setupGameTable} from '../gameTable';
import {setupDealerSection} from '../dealerSection';
import {setupPlayerSection} from '../playerSection';

/**
 * Sets up the game section of the game.
 * This includes setting up the dealer section, game table section, and player section.
 *
 * @param {HTMLElement} element - The parent element to which the game section elements will be appended.
 */
export function setupGameSection(element: HTMLElement) {
    if (!element) return;

    /**
     * An object mapping section ids to their corresponding setup functions.
     */
    const sections: { [key: string]: (element: HTMLElement) => void } = {
        'dealer-section': setupDealerSection,
        'gameTable-section': setupGameTable,
        'player-section': setupPlayerSection
    };

    /**
     * For each section id, remove the existing section with that id (if it exists),
     * create a new section with that id, append it to the parent element,
     * and call the corresponding setup function.
     */
    Object.keys(sections).forEach((id) => {
        const existingSection = element.querySelector(`#${id}`);
        existingSection?.remove();

        const newSection = document.createElement('section');
        newSection.id = id;
        element.append(newSection);

        sections[id](newSection);
    });
}
