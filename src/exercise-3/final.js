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

class People extends React.Component {
  state = {
    list: people,
    newPerson: {},
  };

  renderPeople() {
    return this.state.list.map((person, index) => (
      <Person {...person} key={index} />
    ));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      newPerson: {
        ...this.state.newPerson,
        [name]: value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.newPerson],
      newPerson: {
        firstName: '',
        lastName: '',
        age: '',
      },
    });
  };

  renderForm() {
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstName"
          value={this.state.newPerson.firstName}
          onChange={this.handleChange}
          className="form-control"
        />

        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={this.state.newPerson.lastName}
          onChange={this.handleChange}
          className="form-control"
        />

        <label htmlFor="">Age</label>
        <input
          type="number"
          name="age"
          value={this.state.newPerson.age}
          onChange={this.handleChange}
          className="form-control"
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Add Person
        </button>
      </form>
    );
  }
  render() {
    return (
      <div>
        {this.renderPeople()}
        <h3>Add New</h3>
        {this.renderForm()}
      </div>
    );
  }
}

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

const Final = () => <People />;

export default Final;
