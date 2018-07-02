import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducer';

const reducer = combineReducers({
    countriesReducer
});

export default reducer;

// combineReducers, dzięki której w prostszy sposób możemy łączyć ze sobą reduktory !!
// plik SRC/REDUCERS/INDEX.JS, gdzie zwykło się scalać ze sobą zdefiniowane reducery 
// (mimo, że nasza aplikacja zawiera jedynie jeden) za pomocą metody combineReducers, 
// która przyjmuje jako parametr obiekt z dostępnymi w aplikacji reducerami.