'use strict';

const {dom} = require('xow');

const App = require('../components/base');
const Main = require('../components/main');
const TaskAdder = require('../components/task-adder');
const TaskList = require('../components/task-list');


module.exports = class Index extends App {
    render() {
        return (
            <Main>
                <TaskAdder />
                <TaskList />
            </Main>
        );
    }
}