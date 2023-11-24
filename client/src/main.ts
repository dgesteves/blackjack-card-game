import './ui/styles/global.css';
import { setupView } from './views';
import { APP_ID } from './constants';

/**
 * Entry point of the application.
 *
 * This script imports the necessary styles and modules, and then calls the setupView function
 * from the views module to set up the main view of the application.
 *
 * The setupView function is called with the element with the ID specified in APP_ID from the constants module.
 */
setupView(document.getElementById(APP_ID)!);
