'use strict';

const {YES, NO, dom} = require('xow');

const App = require('./base');

module.exports = class Task extends App {
    toggleTask() {
        const {task, i} = this.props;
        this.state.tasks = [...this.state.tasks.slice(0, i), 
                            Object.assign({}, task, {enabled: !task.enabled}),
                            ...this.state.tasks.slice(i + 1)];
    }
    render() {
        const {task} = this.props;
        return (
            <li key={task.id} style={{'list-style-type': 'none'}} onclick={() => this.toggleTask()}>
                <input type="checkbox"
                       checked={task.enabled ? NO : YES} />
                <span class="task-text" style={{'text-decoration': task.enabled ? 'initial' : 'line-through'}}>{task.text}</span>
            </li>
        );
    }
}