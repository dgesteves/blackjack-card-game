import { generateGameId } from '.';

describe('generateGameId', () => {
  it('should return a string', () => {
    const result = generateGameId();
    expect(typeof result).toBe('string');
  });

  it('should return a string of length 7', () => {
    const result = generateGameId();
    expect(result.length).toBe(7);
  });

  it('should return a unique value each time it is called', () => {
    const result1 = generateGameId();
    const result2 = generateGameId();
    expect(result1).not.toBe(result2);
  });
});
