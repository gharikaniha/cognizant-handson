import React from 'react';

export default function ListofPlayers({ players }) {
  return (
    <div>
      {players.map((item, index) => (
        <div key={index}>
          {item.name} {item.score}
        </div>
      ))}
    </div>
  );
}
