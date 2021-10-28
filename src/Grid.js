import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((item, i) => (
          <td key={i}>{item.title}</td>
        ))}
      </tr>
    </thead>
    <tbody>
        {data.map((movie, i) => (
          <tr key={i}>
            {config.map((item, j) => (
              <td key={j}>{movie[item.field]}</td>
            ))}
          </tr>
        ))}
    </tbody>
  </table>
);

export default Grid;
