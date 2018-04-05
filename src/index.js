import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login/login';
import FaceID from './components/face-id/face-id';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <MuiThemeProvider>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/faceid" component={FaceID} />
                        <Route path="/home" component={App} />
                        <Redirect from="**" to="/" />
                    </Switch>
                </MuiThemeProvider>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
