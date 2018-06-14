import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap.min.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import midware from './midware'


const store = createStore(reducer,midware)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
