import PropTypes from 'prop-types';
import React from 'react';

export const Person = ({ firstName, lastName, age }) => (
  <>
    <div>First Name: {firstName}</div>
    <div>Last Name: {lastName}</div>
    <div>Age: {age}</div>
  </>
);

Person.defaultProps = {
  age: 20,
};

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

const Final = () => (
  <Person firstName="Zama Khan" lastName="Mohammed" age={28} />
);

export default Final;
