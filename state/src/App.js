import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    Person: {
      fullName: "Christian Gabe",
      bio: "The customer is very important.",
      imgSrc: "https://via.placeholder.com/150/92c952",
      profession: "Developer"
    },
    show: false,
    time: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { Person, show, time } = this.state;

    return (
      <div className="App">
      
        <p className="App-profil">
          {show && (
            <>
              <img src={Person.imgSrc} alt={Person.fullName} />
              <h2>{Person.fullName}</h2>
              <p>{Person.bio}</p>
              <p>{Person.profession}</p>
            </>
          )}
          <button onClick={this.handleShow}>
            {show ? "Hide" : "Show"} Profile
          </button>
        </p>
        <p>Component mounted since {time} seconds.</p>
      </div>
    );
  }
}

export default App;
