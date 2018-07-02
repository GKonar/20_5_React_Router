import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = { //inicjalny stan naszej aplikacji
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: []
};

const countriesReducer = function (state = initialState, action) {  //wartość domyślna = initial state
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries});
        
        case GET_COUNTRY:
  			const selectedCountry= state.countries.find(country => country.id === parseInt(action.id)); //parseInt parses a string and returns an integer
  			return Object.assign({}, state, {selectedCountry});										  // find(country => country.id == action.id);

  		 case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});

        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.id !== action.id);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id !== action.id);
            return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});

        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return Object.assign({}, state, {visibleCountries: continentCountries});
    default:
    	return state;
    }
};

export default countriesReducer;

// Stan aplikacji zawiera pole countries, które opisuje wszystkie dostępne państwa. Po wystartowaniu aplikacji 
// przypisujemy do tego pola, państwa zdefiniowane w pliku data/countries.json. Reducer potrafi na chwilę obecną 
// obsłużyć jedną akcję - GET_COUNTRIES. Po jej wywołaniu reducer tworzy kopię obiektu state i do pola countries 
// przypisuje obecną wartość tego pola. Mamy również dwa zabezpieczenia przed niepożądanymi zdarzeniami. Po pierwsze, 
// w przypadku przekazania do reducera stanu aplikacji w stanie undefined zostanie do niego przypisana domyślna 
// wartość initialState. Po drugie, w przypadku przekazania nieznanego typu akcji zostanie zwrócony obecny stan, 
// czyli po prostu nie wykonamy żadnej zmiany.

