import { GET_COUNTRIES } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = { //inicjalny stan naszej aplikacji
    countries: countriesData
};

const countriesReducer = function (state = initialState, action) {  //wartość domyślna = initial state
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries})
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

