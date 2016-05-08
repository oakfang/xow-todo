'use strict';

const {dom, children} = require('xow');
const App = require('./base');

module.exports = class Main extends App {
    render() {
        const { newTask, list } = this.props;
        return (
            <div class="mdl-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                        <span class="mdl-layout-title">TODO</span>
                    </div>
                </header>
                <main class="mdl-layout__content">
                    <div class="mdl-grid">
                        <div class="mdl-cell mdl-cell--6-col mdl-cell--3-offset">
                            {children(this.props.children)}
                        </div>
                    </div>                    
                </main>                
            </div>
        );
    }
}