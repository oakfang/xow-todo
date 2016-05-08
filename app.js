'use strict';

const {renderTo} = require('xow');

const Main = require('./components/main');
const TaskAdder = require('./components/task-adder');
const TaskList = require('./components/task-list');

renderTo(document.getElementById('container'), new Main({}, [
    new TaskAdder,
    new TaskList
]));