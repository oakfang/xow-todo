'use strict';

const {dom} = require('xow');

const App = require('../components/base');
const Main = require('../components/main');
const TaskList = require('../components/task-list');


module.exports = class Index extends App {
    render() {
        const [taskId] = this.props.routeParams;
        return (
            <Main>
                { taskId ? 
                    <TaskList filter={taskId} /> :
                    <TaskList /> }
            </Main>
        );
    }
}