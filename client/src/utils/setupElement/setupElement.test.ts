import { expect, describe, beforeEach, it } from 'vitest';
import { setupElement } from '.';
import { SetupElement } from '../../types';

describe('setupElement function', () => {
  let parent: HTMLElement;
  let options: SetupElement;

  beforeEach(() => {
    parent = document.createElement('div');
    options = {
      parent,
      selector: '#test',
      type: 'div',
      id: 'test',
      className: 'test-class',
      color: 'red',
      textContent: 'test content',
    };
  });

  it('returns null if parent is not provided', () => {
    options.parent = undefined as unknown as HTMLElement;
    const result = setupElement(options);
    expect(result).toBeNull();
  });

  it('creates and returns a new element if an element with the same selector does not exist', () => {
    const result = setupElement(options);
    expect(result).not.toBeNull();
    expect(result?.id).toEqual('test');
    expect(result?.className).toEqual('test-class');
    expect(result?.dataset.color).toEqual('red');
    expect(result?.textContent).toEqual('test content');
  });

  it('removes the existing element and creates a new one if an element with the same selector exists', () => {
    parent.innerHTML = '<div id="test"></div>';
    const result = setupElement(options);
    expect(parent.querySelector('#test')).toBe(result);
    expect(parent.querySelectorAll('#test').length).toBe(1);
  });
});
