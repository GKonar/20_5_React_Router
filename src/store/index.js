import { createStore } from 'redux';
import reducer from '../reducers/index';
import DevTools from '../DevTools';

// Dodawanie STORE

const store = createStore(
  reducer,
  DevTools.instrument()
);

export default store;

// Store to nic innego jak po prostu jeden obiekt aplikacji, który łączy obie te rzeczy razem. 
// Do jego odpowiedzialności należy nie tylko trzymanie całego stanu aplikacji, ale także:
// 
// umożliwianie dostępu do stanu za pomocą metody getState()
// umożliwianie modyfikowania stanu za pomocą metody dispatch(action)
// rejestrowanie funkcji nasłuchujących (ang. listener) przy użyciu metody subscribe(listener)
// wyrejestrowywanie funkcji nasłuchujących dzięki wywołaniu funkcji, które te zwracają.

