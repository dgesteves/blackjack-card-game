import { expect, vi, describe, beforeEach, it } from 'vitest';
import { setupView } from '.';
import { setupHeader } from '../components/header';
import { setupGameSection } from '../components/gameSection';

vi.mock('../components/header', () => ({
  setupHeader: vi.fn(),
}));

vi.mock('../components/gameSection', () => ({
  setupGameSection: vi.fn(),
}));

describe('setupView', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('sets up the view correctly when the element is provided', () => {
    const mockElement = document.createElement('div');
    // Mock the appendChild method
    mockElement.appendChild = vi.fn();

    const mockHeaderElement = document.createElement('header');
    const mockGameSectionElement = document.createElement('section');

    // Save the original function
    const originalCreateElement = document.createElement;

    document.createElement = vi.fn((tagName) => {
      if (tagName === 'header') {
        return mockHeaderElement;
      } else if (tagName === 'section') {
        return mockGameSectionElement;
      }
      // Call the original function instead of the mock
      return originalCreateElement.call(document, tagName);
    });

    setupView(mockElement);

    expect(document.createElement).toHaveBeenCalledWith('header');
    expect(document.createElement).toHaveBeenCalledWith('section');
    expect(mockElement.appendChild).toHaveBeenCalledWith(mockHeaderElement);
    expect(mockElement.appendChild).toHaveBeenCalledWith(
      mockGameSectionElement,
    );
    expect(setupHeader).toHaveBeenCalledWith(mockHeaderElement);
    expect(setupGameSection).toHaveBeenCalledWith(mockGameSectionElement);
  });

  it('does not throw an error when the element is not provided', () => {
    // Pass an HTMLElement instead of null
    const mockElement = document.createElement('div');
    expect(() => setupView(mockElement)).not.toThrow();
  });

  it('throws an error when a non-HTMLElement is passed', () => {
    const nonHTMLElement = 'not an HTMLElement';
    expect(() => setupView(nonHTMLElement as unknown as HTMLElement)).toThrow();
  });
});
