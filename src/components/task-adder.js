'use strict';

const {YES, NO, dom} = require('xow');
const {link, pipe} = require('xain');

const App = require('./base');
const TextInput = require('./text-input');

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
    setCurrentText({target}) {
        this.state.currentInput = target.value;
    }
    render() {
        const {current, disabledCount} = this.props;
        return (
            <div class="mdl-grid">
                <form action="#" class="mdl-cell mdl-cell-6-col">
                    <TextInput value={current} required={true} onInput={this.setCurrentText} label="To do..." />
                </form>
                <div class="mdl-cell mdl-cell-3-col">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                            disabled={current ? NO : YES} onclick={this.addTask}>
                        Add
                    </button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
                            disabled={disabledCount ? NO : YES} onclick={this.clearTasks}>
                        Clear all done
                    </button>    
                </div>
            </div>
        );
    }
}