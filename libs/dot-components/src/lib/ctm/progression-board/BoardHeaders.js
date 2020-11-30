import React from 'react';

export const Header = (props) => (
  <div className="board-column-header">{props.name}</div>
);

export const BoardHeaders = (props) => {
  return (
    <div className="board-headers">
      {props.headers.map((header, i) => (
        <Header key={i} name={header} />
      ))}
    </div>
  );
};
