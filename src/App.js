import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import Routers from './router';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider {...store} >
                <Routers />
            </Provider>
        );
    }
}

export default App;
