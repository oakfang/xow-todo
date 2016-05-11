'use strict';

const {renderTo, dom} = require('xow');

const Main = require('./components/main');
const TaskAdder = require('./components/task-adder');
const TaskList = require('./components/task-list');

renderTo(document.getElementById('container'), (
    <Main>
        <TaskAdder />
        <TaskList />
    </Main>
));