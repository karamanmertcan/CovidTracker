import React from 'react';
import './infoBox.css';
import Numeral from 'numeral';

const InfoBox = ({
  cases,
  todayCases,
  deaths,
  todayDeaths,
  recovered,
  todayRecovered,
}) => {
  return (
    <>
      <div className='container center-align'>
        <div className='row center-align'>
          <div className='info-box col  l4 m4 s12 '>
            <span className='case'>Coronavirus Cases</span>
            <span className='case-amount'>
              +{Numeral(todayCases).format('0,0')}
            </span>
            <span className='total-amount'>
              +{Numeral(cases).format('0,0')} Total
            </span>
          </div>
          <div className='info-box col l4 m4 s12'>
            <span className='case'>Recovered</span>
            <span className='case-amount'>
              +{Numeral(todayRecovered).format('0,0')}
            </span>
            <span className='total-amount'>
              +{Numeral(recovered).format('0,0')}k Total
            </span>
          </div>
          <div className='info-box col   l4 m4 s12'>
            <span className='case'>Death</span>
            <span className='case-amount'>
              +{Numeral(todayDeaths).format('0,0')}
            </span>
            <span className='total-amount'>
              +{Numeral(deaths).format('0,0')}k Total
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBox;
