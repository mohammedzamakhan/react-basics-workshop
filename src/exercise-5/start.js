import React from 'react';
import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';

class HeavyCalcComponent extends React.Component {
  render() {
    return primeNumberList.map((prime, i) => {
      return (
        <div key={i}>
          {prime} {isPrimeNumber(prime) ? 'Yes' : 'No'}
        </div>
      );
    });
  }
}

class ParentComponent extends React.Component {
  state = {
    value: '',
  };
  render() {
    return (
      <React.Fragment>
        <input
          placeholder="Type Here"
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <HeavyCalcComponent />
      </React.Fragment>
    );
  }
}

const Start = () => <ParentComponent />;

export default Start;
