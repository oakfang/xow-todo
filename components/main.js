'use strict';

const dom = require('xow/jsx');
const App = require('./base');

module.exports = class Main extends App {
    render() {
        const { newTask, list } = this.props;
        return (
            <div>
                <h1>Welcome!</h1>
                {newTask.$}
                {list.$}
            </div>
        );
    }
}