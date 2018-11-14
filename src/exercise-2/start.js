import React from 'react';
import PropTypes from 'prop-types';

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
  },
  {
    firstName: 'Jan',
    lastName: 'Doe',
  },
  {
    firstName: 'Micheal',
    lastName: 'Smith',
  },
];

/**
 * 1. Map through the list prop to show all the Person's
 * 2. Pass key to the Person component so that React can optimize the list
 */

const People = props => {
  return <Person firstName="John" lastName="Doe" age={28} />;
};

const Person = props => (
  <div
    style={{
      marginTop: 10,
    }}
  >
    <div>First Name: {props.firstName}</div>
    <div>Last Name: {props.lastName}</div>
    <div>Age: {props.age}</div>
  </div>
);

Person.defaultProps = {
  age: 20,
};

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

const Start = () => <People list={people} />;

export default Start;
