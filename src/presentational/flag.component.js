import React from 'react';
import styles from '../country.css';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.imageUrl} alt="country_flag_pic" />
    </div>
);

export default CountryFlag;