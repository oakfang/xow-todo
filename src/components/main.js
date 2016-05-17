'use strict';

const {dom, children} = require('xow');
const {pipe} = require('xain');
const {Link} = require('xow-route');
const App = require('./base');


module.exports = class Main extends App {
    static reaction(state) {
        return {
            loading: pipe(state, 'loading')
        };
    }
    render() {
        const { loading } = this.props;
        return (
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                        <span class="mdl-layout-title">TODO</span>
                        <div class="mdl-layout-spacer"></div>
                        <nav class="mdl-navigation mdl-layout--large-screen-only">
                            <Link class="mdl-navigation__link" path="/">Full</Link>
                            <Link class="mdl-navigation__link" path="/basic">Basic</Link>
                            <Link class="mdl-navigation__link" path="/list">List</Link>
                        </nav>
                    </div>
                </header>
                <main class="mdl-layout__content">
                    <div class="page-content">
                        <div class="mdl-grid">
                            <div class="mdl-cell mdl-cell--6-col mdl-cell--3-offset">
                                { children(this.props.children) }
                                { loading ?
                                    <h1>Loading...</h1> :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}