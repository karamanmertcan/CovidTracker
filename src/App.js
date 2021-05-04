import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import InfoBox from './components/InfoBox/InfoBox';
import MyMap from './components/Map/Map';
import 'leaflet/dist/leaflet.css';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 39, lng: 35 });
  const [term, setSearchTerm] = useState('');
  const [countryInfo, setCountryInfo] = useState({});
  const [countryMapInfo, setCountryMapInfo] = useState([]);

  console.log(countryInfo.countryInfo);

  const countryUrl = `https://disease.sh/v3/covid-19/countries/${term}`;
  const worldUrl = `https://disease.sh/v3/covid-19/all`;

  const getCountriesData = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const data = await response.json();

    const countries = data.map(country => ({
      name: country.country, // United States, United Kingdom
      value: country.countryInfo.iso2, // UK, USA, FR
      flag: country.countryInfo.flag,
    }));
    console.log(countries);

    setCountryMapInfo(countries);
    setCountries(data);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(term === '' ? worldUrl : countryUrl);
      const data = await response.json();
      setSearchTerm('');
      setCountryInfo(data);
      setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });
    } catch (error) {
      console.log(error);
    }

    // term === 'worldwide'
    //   ? setMapCenter([39, 35])
    //   : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
        console.log(data);
      });
  }, []);

  if (loading) {
    return (
      <div className='spinner'>
        <div class='preloader-wrapper big active center'>
          <div class='spinner-layer spinner-blue-only'>
            <div class='circle-clipper left'>
              <div class='circle'></div>
            </div>
            <div class='gap-patch'>
              <div class='circle'></div>
            </div>
            <div class='circle-clipper right'>
              <div class='circle'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className=' container col s12 m12 l12'>
        <form className='country-form col l12 m12 s12' onSubmit={handleSubmit}>
          <div className='form-control'>
            <input
              type='text'
              value={term}
              className='country-input'
              placeholder='Please enter country name'
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
      <InfoBox
        cases={countryInfo.cases}
        todayCases={countryInfo.todayCases}
        deaths={countryInfo.deaths}
        todayDeaths={countryInfo.todayDeaths}
        recovered={countryInfo.recovered}
        todayRecovered={countryInfo.todayRecovered}
      />
      <MyMap countries={countries} mapCenter={mapCenter} />
      <Table countries={countries} />
      <Footer />
    </>
  );
}

export default App;
