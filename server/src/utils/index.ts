/**
 * Function to generate a unique game ID
 * @returns {string} A random string of 7 characters
 */
export function generateGameId(): string {
  return Math.random().toString(36).substring(2, 9);
}
