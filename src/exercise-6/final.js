import React from 'react';

class ParentComponent extends React.Component {
  state = {
    value: '',
  };

  handleButtonClick = () => {
    this.inputRef.focus();
  };

  render() {
    return (
      <React.Fragment>
        <input
          placeholder="Type Here"
          type="text"
          ref={ref => (this.inputRef = ref)}
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <button onClick={this.handleButtonClick}>Focus</button>
      </React.Fragment>
    );
  }
}

const Final = () => <ParentComponent />;

export default Final;
