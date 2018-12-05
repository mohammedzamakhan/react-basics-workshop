import React from 'react';

export class Timer extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

const Final = () => <Timer />;

export default Final;
