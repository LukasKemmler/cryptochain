import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import App from './componets/App';
import Blocks from './componets/Blocks';
import ConductTransaction from './componets/ConductTransaction';
import TransactionPool from './componets/TransactionPool';
import './index.css';

render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/blocks' component={Blocks} />
            <Route path='/conduct-transaction' component={ConductTransaction} />
            <Route path='/transaction-pool' component={TransactionPool} />
        </Switch>
    </Router>,
    document.getElementById('root')
);