import React from 'react';
import './styles.css';

function App() {
  const element = "Office Space";

  const jsxAtt = (
    <img
      src="https://images.unsplash.com/photo-1598928506311-c55dedc78856"
      width="25%"
      height="25%"
      alt="Office Space"
    />
  );

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 70000, Address: "Bangalore" },
    { Name: "Awfis", Rent: 55000, Address: "Hyderabad" },
    { Name: "91Springboard", Rent: 80000, Address: "Mumbai" }
  ];

  // Conditional class assignment
  const getColorClass = (rent) => {
    return rent <= 60000 ? 'textRed' : 'textGreen';
  };

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>
      {jsxAtt}
      <hr />
      {officeList.map((item, index) => (
        <div key={index}>
          <h2>Name: {item.Name}</h2>
          <h3 className={getColorClass(item.Rent)}>Rent: Rs. {item.Rent}</h3>
          <h3>Address: {item.Address}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
