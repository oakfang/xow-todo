'use strict';

const {YES, NO, dom} = require('xow');
const {link, pipe} = require('xain');

const App = require('./base');

module.exports = class TaskAdder extends App {
    static reaction(state) {
        return {
            current: pipe(state, 'currentInput'),
            disabledCount: link(state, ({tasks}) => tasks.filter(({enabled}) => !enabled).length)
        }
    }
    getTaskId() {
        return Math.round((new Date).valueOf() * Math.random());
    }
    addTask() {
        const {current} = this.props;
        this.state.tasks = [...this.state.tasks, {text: current, id: this.getTaskId(), enabled: true}];
        this.state.currentInput = '';
    }
    clearTasks() {
        this.state.tasks = this.state.tasks.filter(({enabled}) => enabled);
    }
    render() {
        const {current, disabledCount} = this.props;
        return (
            <div>
                <input value={new String(current)} 
                       style={{display: 'inline-block'}} 
                       oninput={(e) => {this.state.currentInput = e.target.value}} />
                <button style={{display: 'inline-block'}} disabled={current ? NO : YES} onclick={() => this.addTask()}>
                    Add
                </button>
                <button style={{display: 'inline-block'}} disabled={disabledCount ? NO : YES} onclick={() => this.clearTasks()}>
                    Clear all done
                </button>
            </div>
        );
    }
}