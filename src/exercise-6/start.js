import React from 'react';

class ParentComponent extends React.Component {
  state = {
    value: '',
  };

  handleButtonClick = () => {};

  render() {
    return (
      <React.Fragment>
        <input
          placeholder="Type Here"
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <button onClick={this.handleButtonClick}>Focus</button>
      </React.Fragment>
    );
  }
}

const Start = () => <ParentComponent />;

export default Start;
