import React from 'react';
import './Table.css';
import Numeral from 'numeral';

const Table = ({ countries }) => {
  return (
    <div className='container '>
      <div className='table-container'>
        <table className='striped  col-3 l9 m9 s12 grey lighten-1'>
          <tbody>
            {countries.map(country => {
              return (
                <tr>
                  <td>{country.country}</td>
                  <td>{Numeral(country.cases).format('0,0')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
