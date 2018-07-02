import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions-countries';
import styles from '../country.css'

class CountryFlagContainer extends Component { // Nie kumam za bardzo jak działa 
    componentDidMount() {
        this.props.dispatch(getCountries()); // ?????????? jak ??????
        this.props.dispatch(searchCountries(''));
    }

    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <CountryFlagList 
                    countries={this.props.visibleCountries} 
                    deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);

//	W metodzie componentDidMount wywoływanej tuż po render odwołujemy się do store'a za pomocą metody dispatch. 
//	Stan aplikacji w polu countries zawiera wtedy tablicę obiektów pobraną z pliku /data/countries.json. 
//	Wartość ta jest mapowana w funkcji mapStateToProps do propsa komponentu <CountryFlagContainer> 
//	nazwanego countries - stamtąd przekazujemy go jako parametr do propsa countries omawianego niedawno 
//	komponentu <CountryFlagList>. W ten sposób otrzymuje on dane jakich oczekiwał, czyli tablicę obiektów.