import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Jacob Robbin',
        bio: 'A passionate developer',
        imgSrc: 'https://media.istockphoto.com/id/1430286027/photo/information-technology-businessman-working-on-computer-in-office-for-digital-app-software.webp?b=1&s=170667a&w=0&k=20&c=YFwXXbAFfDtX7-2iNcbH6N-ttS3CcnMt7rlUlwIXZ2g=',
        profession: 'Software Engineer',
      },
      show: false,
      intervalId: null,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Show Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time Since Mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
