import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header';
import HomePage from '../home-page';
import Image from '../image';
import ContentPage from '../content-page';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Image />
            <Switch>
                <Route exact path="/content" component={ContentPage} />
                <Route component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;