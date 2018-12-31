import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import {renderRoutes} from 'react-router-config'

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    
    , document.querySelector('#root'))