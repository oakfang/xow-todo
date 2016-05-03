'use strict';

const {YES, NO} = require('xow');

const App = require('./base');

module.exports = class Task extends App {
    render() {
        const {task, i} = this.props;
        return ['li', {
            key: task.id,
            style: {'list-style-type': 'none'},
            onclick() {
                this.state.tasks = [...this.state.tasks.slice(0, i), 
                                    Object.assign({}, task, {enabled: !task.enabled}),
                                    ...this.state.tasks.slice(i + 1)];
            }
        }, [
            ['input', {
                type: 'checkbox',
                checked: task.enabled ? NO : YES,
                style: {'display': 'inline-block', 'margin-right': '25px', 'vertical-align': 'bottom'}
            }],
            ['span', {
                style: {'text-decoration': task.enabled ? 'initial' : 'line-through'}
            }, task.text]
        ]]
    }
}