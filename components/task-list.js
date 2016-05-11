'use strict';

const {link, pipe} = require('xain');
const {dom, children} = require('xow');

const App = require('./base');
const Task = require('./task');

module.exports = class TaskList extends App {
    static reaction(state) {
        return {
            tasks: pipe(state, 'tasks'),
            taskCount: link(state, ({tasks}) => tasks.length)
        }
    }
    render() {
        const {tasks, taskCount} = this.props;
        return (
            <div>
                <h3>Task count is: {taskCount}</h3>
                <ul style={{'padding': 0}}>
                    {children(tasks.map((task, i) => 
                        <Task task={task} i={i}/>
                    ))}
                </ul>
            </div>
        );
    }
}