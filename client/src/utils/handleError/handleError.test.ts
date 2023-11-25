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
  let consoleErrorSpy: SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('logs the provided message to the console', () => {
    const message = 'Test error message';
    handleError(message);
    expect(consoleErrorSpy).toHaveBeenCalledWith(message, undefined);
  });

  it('logs the provided message and error to the console', () => {
    const message = 'Test error message';
    const error = new Error('Test error');
    handleError(message, error);
    expect(consoleErrorSpy).toHaveBeenCalledWith(message, error);
  });
});
