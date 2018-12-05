import PropTypes from 'prop-types';
import React from 'react';

export const People = props => {
  return props.list.map((person, index) => <Person {...person} key={index} />);
};

const PeopleCount = props => {
  return <div>Count: {props.count}</div>
}

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

const FirstWrapper = (props) => {
  return (<div style={{border: '1px solid red', padding: 10}}>
    <SecondWrapper list={props.list}>
      <PeopleCount count={props.list.length}/>
    </SecondWrapper>
  </div>);
}

const SecondWrapper = (props) => {
  return (<div style={{border: '1px solid yellow', padding: 10}}>
    <ThirdWrapper list={props.list}>
        {props.children}
    </ThirdWrapper>
  </div>)
}

const ThirdWrapper = (props) => {
  return <div style={{border: '1px solid pink', padding: 10}}><People list={props.list}/>{props.children}</div>
}
const Start = () => {
  const list = [
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
  return (
    <FirstWrapper list={list}>
      
    </FirstWrapper>
  );
};

export default Start;
