import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

/**
 * 1. Understand how vanilla js rendering and re rendoring works
 * 2. Understand React createElement
 * 3. Understand Virtual DOM
 * 4. Understand JSX
 */

rootElement.innerHTML = `
    <h1 class="text-center">React Basics Workshop</h1>
`;
