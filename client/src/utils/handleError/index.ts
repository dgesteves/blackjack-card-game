/**
 * This function is used to handle errors throughout the application.
 * It logs the provided message and error to the console.
 *
 * @param {string} message - The message to be logged to the console.
 * @param {Error} [error] - The error to be logged to the console. This parameter is optional.
 */
export function handleError(message: string, error?: Error) {
  console.error(message, error);
}
