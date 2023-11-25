/**
 * Updates the text of an HTML element.
 *
 * @param {string} elementId - The ID of the element to update.
 * @param {string} text - The new text for the element.
 * @param {string} [prefix] - An optional prefix to prepend to the text.
 */
export function updateElementText(
  elementId: string,
  text: string,
  prefix?: string,
) {
  const element = document.getElementById(elementId);
  if (element) element.innerText = prefix ? `${prefix} ${text}` : text;
}
