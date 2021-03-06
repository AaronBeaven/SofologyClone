import React from 'react';
import {BrowserRouter as LoomBand, Switch, Route} from 'react-router-dom'
import Navbar from  './components/Navbar'
import Login from './Login'
import FindAStore from './components/FindAStore'
import Footer from './components/Footer';
import Home from './components/Home';
import Responsibility from './components/Responsibility';
import Calltoorder from './components/Calltoorder';
import Clearance from './components/Clearance';


class App extends React.Component {
    render() {
        return(
            <div>
                <LoomBand>
                    <div>
                        <Navbar />
                    </div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/findstore" exact component={FindAStore}/>
                        <Route path="/responsibility" exact component={Responsibility}/>
                        <Route path="/calltoOrder" exact component={Calltoorder}/>
                        <Route path="/Clearance" exact component={Clearance}/>

                        {/* <Route path="/findstore" component={FindAStore}/> */}
                        {/* <Route path="" component={}/> */}
                    </Switch>
                <Footer/>
                </LoomBand>
            </div>
        );
    }
}

export default App;