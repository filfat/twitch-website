import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Views/Home';
import Blog from '../../Views/Blog';
import Videos from '../../Views/Videos';

import E404 from '../../Views/E404';

class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/blog' component={Blog}/>
                    <Route exact path='/videos' component={Videos}/>

                    <Route path='/*' component={E404}/>
                </Switch>
            </main>
        );
    }
}
export default Main;