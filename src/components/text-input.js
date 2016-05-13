'use strict';

const {YES, NO, dom} = require('xow');

const App = require('./base');

module.exports = class TextInput extends App {
    render() {
        const {value, onInput, required, label} = this.props;
        return (
            <div class="group">
                <input type="text"
                       value={new String(value)}
                       oninput={onInput ? onInput : NO}
                       required={required ? YES : NO} />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>{label}</label>
            </div>
        );
    }
};