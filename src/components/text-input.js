'use strict';

const {YES, NO, dom} = require('xow');

module.exports = ({value, onInput, required, label}) => (
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