import React from 'react';

function GuestGreeting() {
  return <h2>Welcome Guest! Please login to book your flight tickets.</h2>;
}

function UserGreeting() {
  return <h2>Welcome back! You can now book your tickets.</h2>;
}

export default function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
