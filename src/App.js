import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

import './scss/main.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>filiphsandstrom</title>
                </Helmet>
                
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;