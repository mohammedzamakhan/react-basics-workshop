import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/**
 * 1. Understand how vanilla js rendering and re rendoring works
 * 2. Understand React createElement
 * 3. Understand Virtual DOM
 * 4. Understand JSX
 */

// rootElement.innerHTML = `
//     <div class="text-center">
//         <h1>React Basics Workshop</h1>
//         <span>Time: ${new Date().toLocaleTimeString()}</span>
//     </div>
// `;
