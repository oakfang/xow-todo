'use strict';

const {Component} = require('xow');
const {observable, observe, stream} = require('xain');

const state = window.state = observable({
    currentInput: '',
    tasks: [],
    loading: true
});

const tasksStream = stream(state).filter(key => key === 'tasks').map((_k, tasks) => tasks);

fetch('/tasks').then(response => response.json()).then(({tasks}) => {
    state.loading = false;
    state.tasks = tasks;
}).then(() => observe(tasksStream, tasks => {
    state.loading = true;
    fetch('/tasks', {
        method: 'PUT', 
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({tasks})
    }).then(() => state.loading = false);
}));

module.exports = Component(state);