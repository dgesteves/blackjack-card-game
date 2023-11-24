import { expect, vi, describe, beforeEach, it } from 'vitest';
import { setupView } from './views';

vi.mock('./views', () => ({
  setupView: vi.fn(),
}));

describe('main', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls setupView with the correct element when the element exists', async () => {
    const mockElement = {};
    document.getElementById = vi.fn().mockReturnValue(mockElement);

    await import('./main');

    expect(setupView).toHaveBeenCalledWith(mockElement);
  });

  it('does not call setupView when the element does not exist', async () => {
    document.getElementById = vi.fn().mockReturnValue(null);

    await import('./main');

    expect(setupView).not.toHaveBeenCalled();
  });

  it('does not call setupView more than once when the element does not exist', async () => {
    document.getElementById = vi.fn().mockReturnValue(null);

    await import('./main');

    expect(setupView).toHaveBeenCalledTimes(0);
  });
});
