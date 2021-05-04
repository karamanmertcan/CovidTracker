import React from 'react';
import './Map.css';
import numeral from 'numeral';
import {
  MapContainer,
  TileLayer,
  Circle,
  Popup,
  CircleMarker,
} from 'react-leaflet';

const MyMap = ({ countries, mapCenter, cases, recovered, deaths }) => {
  // const showDataOnMap = data => {};

  return (
    <div className='container'>
      <div className='map col s12 col l12 m12'>
        <MapContainer center={mapCenter} zoom={3} scrollWheelZoom={true}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {countries.map((country, index) => {
            return (
              <React.Fragment>
                <Circle
                  key={index}
                  center={[country.countryInfo.lat, country.countryInfo.long]}
                  radius={2000}
                />
                <CircleMarker
                  center={[country.countryInfo.lat, country.countryInfo.long]}
                  radius={Math.sqrt(country.cases / 1000)}
                >
                  <Popup>
                    <div className='info-container'>
                      {/* POPUP DATA */}
                      <div
                        className='info-flag'
                        style={{
                          backgroundImage: `url(${country.countryInfo.flag})`,
                        }}
                      />
                      <div className='info-name'>{country.country}</div>
                      <div className='info-confirmed'>
                        Cases: {numeral(country.cases).format('0,0')}
                      </div>
                      <div className='info-recovered'>
                        Recovered: {numeral(country.recovered).format('0,0')}
                      </div>
                      <div className='info-deaths'>
                        Deaths: {numeral(country.deaths).format('0,0')}
                      </div>
                    </div>
                  </Popup>
                </CircleMarker>
              </React.Fragment>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default MyMap;
