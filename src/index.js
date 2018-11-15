import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/**
 * 1. Understand how vanilla js rendering and re rendoring works
 * 2. Understand React createElement
 * 3. Understand Virtual DOM
 * 4. Understand JSX
 */

rootElement.innerHTML = `
    <div>
        <h1 class="text-center">React Basics Workshop</h1>
        <span>Time: ${new Date().toLocaleTimeString()}</span>
    </div>
`;
