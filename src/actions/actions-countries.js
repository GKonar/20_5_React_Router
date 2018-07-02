//	TYPY AKCJI
// AKCJE w aplikacji reduxowej stanowią swoistą dokumentację projektu. Często wystarczy spojrzeć w opisujący
// je plik, aby dowiedzieć się jakie funkcjonalności oferuje aplikacja. 


export const GET_COUNTRIES = 'GET_COUNTRIES'; //listowanie wszystkich dostępnych państw
export const GET_COUNTRY = 'GET_COUNTRY'; //wyświetlanie informacji o jednym państwie
export const DELETE_COUNTRY = 'DELETE_COUNTRY'; // usuwanie państwa
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'; //szukanie państwa po nazwie
export const SET_CONTINENT = 'SET_CONTINENT'; //wyświetlanie państw konkretnego kontynentu

//	KREATORY AKCJI

// Stworzenie kreatorów akcji. Każdej z akcji przysługuje dokładnie jeden kreator. 
// W innym wypadku, gdy chcemy zmienić stan store'a używając metody dispatch, trzeba za każdym razem ręcznie 
// tworzyć obiekt, który przekażemy jako parametr tej metody. Przypominam, że kreatory to funkcje, 
// które tworzą ten obiekt za nas. Wystarczy jedynie przekazać metodzie dispatch odpowiedni kreator.

export const getCountries = () => {
    return {
        type: GET_COUNTRIES
    }
}

export const deleteCountry = id => {
    return {
        type: DELETE_COUNTRY,
        id
    };
}

export const getCountry = id => {
    return {
        type: GET_COUNTRY,
        id
    }
}

export const searchCountries = searchText => {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export const setContinent= name => {
    return {
        type: SET_CONTINENT,
        name
    }
}