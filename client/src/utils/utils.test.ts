import {
  expect,
  describe,
  beforeEach,
  afterEach,
  it,
  vi,
  SpyInstance,
} from 'vitest';
import { handleError } from '.';

describe('handleError function', () => {
  let consoleErrorStub: SpyInstance;

  beforeEach(() => {
    consoleErrorStub = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorStub.mockRestore();
  });

  it('should log the provided message and error to the console', () => {
    const errorMessage = 'An error occurred';
    const error = new Error('Test error');

    handleError(errorMessage, error);

    expect(consoleErrorStub).toHaveBeenCalledWith(errorMessage, error);
  });

  it('should log the provided message to the console when no error is provided', () => {
    const errorMessage = 'An error occurred';

    handleError(errorMessage);

    expect(consoleErrorStub).toHaveBeenCalledWith(errorMessage, undefined);
  });

  it('should log a different message to the console', () => {
    const errorMessage = 'A different error occurred';
    const error = new Error('Different test error');

    handleError(errorMessage, error);

    expect(consoleErrorStub).toHaveBeenCalledWith(errorMessage, error);
  });

  it('should handle null error gracefully', () => {
    const errorMessage = 'An error occurred';

    handleError(errorMessage, new Error());

    expect(consoleErrorStub).toHaveBeenCalledWith(errorMessage, new Error());
  });

  it('should handle undefined message gracefully', () => {
    const error = new Error('Test error');

    handleError('', error);

    expect(consoleErrorStub).toHaveBeenCalledWith('', error);
  });
});
