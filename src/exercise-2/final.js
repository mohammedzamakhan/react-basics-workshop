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

const People = props => {
  return props.list.map((person, index) => <Person {...person} key={index} />);
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

const Final = () => <People list={people} />;

export default Final;
