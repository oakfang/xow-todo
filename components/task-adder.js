'use strict';

const {YES, NO} = require('xow');
const {link, pipe} = require('xain');

const App = require('./base');

let id = 0;

module.exports = class TaskAdder extends App {
    static reaction(state) {
        return {
            current: pipe(state, 'currentInput'),
            disabledCount: link(state, ({tasks}) => tasks.filter(({enabled}) => !enabled).length)
        }
    }
    render() {
        const {current, disabledCount} = this.props;
        return ['div', {}, [
            ['input', {
                value: new String(current),
                style: {display: 'inline-block'}, 
                oninput(e) {this.state.currentInput = e.target.value}
            }],
            ['button', {
                style: {display: 'inline-block'}, 
                disabled: current ? NO : YES,
                onclick() {
                    this.state.tasks = [...this.state.tasks, {text: current, id: id++, enabled: true}];
                    this.state.currentInput = '';
                }
            }, ['Add']],
            ['button', {
                style: {display: 'inline-block'},
                disabled: disabledCount ? NO : YES,
                onclick() {
                    this.state.tasks = this.state.tasks.filter(({enabled}) => enabled);
                }
            }, 'Clear all done']
        ]];
    }
}