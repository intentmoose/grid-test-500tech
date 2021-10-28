import React from 'react';
import Trailer from './Trailer';

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
            <td key={j}>
              {item.title === 'trailer' ? (
                <item.component data={movie[item.field].url} />
              ) : (
                movie[item.field]
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
