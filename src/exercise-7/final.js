import PropTypes from 'prop-types';
import React, { createContext } from 'react';

const PeopleContext = createContext();

export const People = props => {
  return (
    <PeopleContext.Consumer>
      {(list) => {
        return list && list.map((person, index) => <Person {...person} key={index} />)
      }}
    </PeopleContext.Consumer>
  )
};

const PeopleCount = props => {

  return (
    <PeopleContext.Consumer>
      {list => list && <div>Count: {list.length}</div>}
    </PeopleContext.Consumer>
  )
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
    <SecondWrapper>
      <PeopleCount />
    </SecondWrapper>
  </div>);
}

const SecondWrapper = (props) => {
  return (<div style={{border: '1px solid yellow', padding: 10}}>
    <ThirdWrapper>
        {props.children}
    </ThirdWrapper>
  </div>)
}

const ThirdWrapper = (props) => {
  return <div style={{border: '1px solid pink', padding: 10}}><People />{props.children}</div>
}
const Final = () => {
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
    <PeopleContext.Provider value={list}>
      <FirstWrapper>
      </FirstWrapper>
    </PeopleContext.Provider>

  );
};

export default Final;
