import { expect, describe, beforeEach, it, vi, Mock } from 'vitest';
import { setupButton } from './index.ts';

describe('setupButton', () => {
  let button: HTMLElement;
  let clickHandler: Mock;

  beforeEach(() => {
    button = document.createElement('button');
    clickHandler = vi.fn();
  });

  it('should set the text content of the button', () => {
    setupButton(button, 'Test Button', clickHandler);

    expect(button.textContent).toEqual('Test Button');
  });

  it('should add a click event listener to the button', () => {
    setupButton(button, 'Test Button', clickHandler);
    button.click();

    expect(clickHandler).toHaveBeenCalled();
  });

  it('should not throw an error when called with a null element', () => {
    expect(() =>
      setupButton(null as unknown as HTMLElement, 'Test Button', clickHandler),
    ).not.toThrow();
  });

  it('should not add a click event listener if the provided element is null', () => {
    setupButton(null as unknown as HTMLElement, 'Test Button', clickHandler);

    expect(clickHandler).not.toHaveBeenCalled();
  });
});
