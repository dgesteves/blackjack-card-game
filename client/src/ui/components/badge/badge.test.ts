import { expect, describe, beforeEach, it } from 'vitest';
import { setupBadge } from '.';

describe('setupBadge', () => {
  let badge: HTMLElement;

  beforeEach(() => {
    badge = document.createElement('div');
  });

  it('should correctly setup badge text when called with a valid element', () => {
    setupBadge(badge, 'Test Badge');

    expect(badge.textContent).toEqual('Test Badge');
  });

  it('should not throw an error when called with a null element', () => {
    expect(() =>
      setupBadge(null as unknown as HTMLElement, 'Test Badge'),
    ).not.toThrow();
  });

  it('should not set text content when called with a null element', () => {
    setupBadge(null as unknown as HTMLElement, 'Test Badge');

    expect(badge.textContent).toEqual('');
  });

  it('should correctly setup badge text even if the provided element is already populated', () => {
    badge.textContent = 'Initial Text';
    setupBadge(badge, 'Test Badge');

    expect(badge.textContent).toEqual('Test Badge');
  });
});
