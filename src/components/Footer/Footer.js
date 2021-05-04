import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='my-footer'>
      <footer class='page-footer grey darken-2'>
        <div class='container'>
          <div class='row'>
            <div class='col l6 s12'>
              <h5 class='white-text'>COVID 19 TRACKER</h5>
            </div>
            <div class='col l4 offset-l2 s12'>
              <h5 class='white-text'>
                <a href='https://disease.sh/docs/' target='_blank'>
                  COVID 19 API
                </a>
              </h5>
            </div>
          </div>
        </div>
        <div class='footer-copyright center-align'>
          <div class='container'>© 2021 Copyright Mertcan Karaman</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
