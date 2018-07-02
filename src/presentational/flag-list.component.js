import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
import styles from '../country.css';

const CountryFlagList = (props) => (
    <div className="countries-list">
        {props.countries.map(country => {
            return (
                <div className="single-country" key={country.id}>
                    <Link className='logo' to={'countries/country/' + country.id}>
                        <CountryFlag country={country} />
                    </Link>
                    <button onClick={props.deleteCountry.bind(null, country.id)}>DELETE</button>
                </div>
            )
        })}
    </div>
);

export default CountryFlagList;

//  Element ten będzie posiadał props o nazwie countries, który będzie tablicą obiektów.
//  Zadaniem tego komponentu będzie wyświetlenie komponentu <CountryFlag> tyle razy, ile wynosi rozmiar tablicy przekazanej 
//  mu w countries-list. W przyszłości element ten będzie miał również za zadanie przenieść nas na podstronę wyświetlającą 
//  szczegółowe dane na temat klikniętego państwa, dlatego już teraz dodamy komponent <Link>, który jest za to 
//  odpowiedzialny.