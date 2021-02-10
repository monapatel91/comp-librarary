import React from 'react';

export interface BoardHeaderProps {
  headers: Array<string>;
}

export const BoardHeaders = ({ headers }: BoardHeaderProps) => {
  return (
    <div className="board-headers">
      {headers.map((header, i) => (
        <div key={i} className="board-column-header">
          {header}
        </div>
      ))}
    </div>
  );
};
