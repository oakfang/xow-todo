'use strict';

const {renderTo, dom} = require('xow');
const {Router, Route} = require('xow-route');

const Index = require('./pages/index');
const Basic = require('./pages/basic');
const ListView = require('./pages/list');

renderTo(document.getElementById('container'), (
    <Router defaultRoute="/">
        <Route path="/" page={Index} />
        <Route path="/basic" page={Basic} />
        <Route path={/\/list(?:\/(\w+))?/} page={ListView} />
    </Router>
));