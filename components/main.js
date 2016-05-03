'use strict';

const App = require('./base');

module.exports = class Main extends App {
    render() {
        const { newTask, list } = this.props;
        return ['div', {}, [
            ['h1', {}, 'Welcome!'],
            newTask.$,
            list.$
        ]];
    }
}