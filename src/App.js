import React from 'react';
import {BrowserRouter as LoomBand, Switch, Route} from 'react-router-dom'
import Navbar from  './components/Navbar'

class App extends React.Component {

    state = {
        user: true
    }
    render() {
        return(
            <div>
                {this.state.user ? (<Router />) : (<Login />)}
            </div>
        );
    }
}

export default App;