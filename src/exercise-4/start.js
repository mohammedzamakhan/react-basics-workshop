import React from 'react';

/**
 * 1. Convert the Timer Component to class component
 * 2. Add a time property to the state with time string
 * 3. Update the state in componentDidMount lifecycle hook
 * 4. Make sure that the timer is cleared on unmounting
 */
const Timer = () => <div>{new Date().toLocaleTimeString()}</div>;

const Start = () => <Timer />;

export default Start;
