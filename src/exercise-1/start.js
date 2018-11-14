import React from 'react';
import PropTypes from 'prop-types';

/**
 * 1. Pass and Access Props (firstName, lastName, age) in Person Component
 * 2. Destructure the props
 * 3. PropTypes for firstName, lastName and age
 * 4. Default Prop age as 20
 */

const Person = () => (
  <>
    <div>First Name: </div>
    <div>Last Name: </div>
    <div>Age: </div>
  </>
);

const Start = () => <Person />;

export default Start;
