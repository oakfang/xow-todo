'use strict';

const {dom} = require('xow');

const App = require('../components/base');
const Main = require('../components/main');
const TaskAdder = require('../components/task-adder');


module.exports = class Basic extends App {
    render() {
        return (
            <Main>
                <TaskAdder />
            </Main>
        );
    }
}