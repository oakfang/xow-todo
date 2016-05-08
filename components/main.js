'use strict';

const {dom, children} = require('xow');
const App = require('./base');

module.exports = class Main extends App {
    render() {
        const { newTask, list } = this.props;
        return (
            <div>
                <h1>Welcome!</h1>
                {children(this.props.children)}
            </div>
        );
    }
}