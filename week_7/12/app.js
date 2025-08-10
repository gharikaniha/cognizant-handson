import React, { Component } from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function FlightDetails() {
  return (
    <div>
      <h3>✈️ Available Flights</h3>
      <ul>
        <li>Chennai ➝ Delhi - 9:00 AM</li>
        <li>Bangalore ➝ Mumbai - 12:30 PM</li>
        <li>Hyderabad ➝ Kolkata - 6:45 PM</li>
      </ul>
    </div>
  );
}

function BookTickets() {
  return (
    <div>
      <h3>🎫 Book Your Tickets Here</h3>
      <button>Book Now</button>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>🛫 Ticket Booking App</h1>
        {button}
        <Greeting isLoggedIn={isLoggedIn} />
        <FlightDetails />
        {isLoggedIn ? <BookTickets /> : null}
      </div>
    );
  }
}

export default App;
