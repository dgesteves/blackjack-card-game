import './styles.css';

/**
 * Sets up a button with the specified text and click handler.
 *
 * @param {HTMLElement} element - The button element to set up.
 * @param {string} text - The text to display on the button.
 * @param {() => void} onClick - The function to execute when the button is clicked.
 * @param disabled
 */
export function setupButton(
    element: HTMLElement,
    text: string,
    onClick: () => void,
    disabled?: string,
) {
    if (!element) return;
    Object.assign(element, {textContent: text, disabled, onclick: onClick});
}
