import { SetupElement } from '../../types';

/**
 * This function is used to create and setup an HTML element with the provided properties.
 * If an element with the same selector already exists as a child of the parent, it is removed before the new element is created.
 * The new element is then appended to the parent.
 *
 * @param {Object} options - The properties of the element to be created.
 * @param {HTMLElement} options.parent - The parent element to which the new element will be appended.
 * @param {string} options.selector - The selector of the element. If an element with this selector already exists as a child of the parent, it is removed.
 * @param {string} options.type - The type of the element to be created.
 * @param {string} [options.id] - The id of the element. This parameter is optional.
 * @param {string} [options.src] - The source of the element, used for image elements. This parameter is optional.
 * @param {string} [options.alt] - The alternative text of the element, used for image elements. This parameter is optional.
 * @param {string} [options.className] - The class name of the element. This parameter is optional.
 * @param {string} [options.color] - The color of the element. This parameter is optional.
 * @param {string} [options.textContent] - The text content of the element. This parameter is optional.
 * @returns {HTMLElement} The created and setup element.
 */
export function setupElement({
  parent,
  selector,
  type,
  id,
  src,
  alt,
  className,
  color,
  textContent,
}: SetupElement) {
  if (!parent) return null;
  let element = parent.querySelector(selector) as HTMLElement;
  if (element) {
    element.remove();
  }
  element = document.createElement(type);
  if (id) element.id = id;
  if (src) (element as HTMLImageElement).src = src;
  if (alt) (element as HTMLImageElement).alt = alt;
  if (className) element.className = className;
  if (color) element.dataset.color = color;
  if (textContent) element.textContent = textContent;
  parent.appendChild(element);
  return element;
}
