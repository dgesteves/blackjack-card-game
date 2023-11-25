import { beforeEach, describe, expect, it } from 'vitest';
import { updateElementText } from '.';

describe('updateElementText', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="test-element"></div>';
  });

  it('updates element text correctly without prefix', () => {
    updateElementText('test-element', 'Hello, world!');

    const element = document.getElementById('test-element');
    expect(element?.innerText).toBe('Hello, world!');
  });

  it('updates element text correctly with prefix', () => {
    updateElementText('test-element', 'world!', 'Hello,');

    const element = document.getElementById('test-element');
    expect(element?.innerText).toBe('Hello, world!');
  });

  it('does not update text for non-existent element', () => {
    updateElementText('non-existent-element', 'Hello, world!');

    const element = document.getElementById('non-existent-element');
    expect(element?.innerText).toBeUndefined();
  });
});
