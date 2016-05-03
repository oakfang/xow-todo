'use strict';

const {Component} = require('xow');
const {observable, observe} = require('xain');

let storedState = localStorage.getItem('state');

const state = window.state = observable(storedState ? JSON.parse(storedState) : {
    currentInput: '',
    tasks: []
});

observe(state, () => {
    localStorage.setItem('state', JSON.stringify(state));
});

module.exports = Component(state);