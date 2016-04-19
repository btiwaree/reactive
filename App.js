import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
var style = require('./css/style.css');

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <Card />
            </div>
        )
    }
}

var Header = React.createClass({

    getInitialState: function () {
        return {data: {mainTitle: 'React Image Search'}};
    },
    render: function () {
        return (

            <div className="header">
                <div className="content-container">
                    <div className="flex-spread">
                        <a href="/" className="logo"/>
                        <div className="ShareButtons">
                            <a href="" className="social-action social-action_twitter"><span>tweet</span></a>
                            <a href="" className="social-action social-action_facebook"><span>share</span></a>
                        </div>
                    </div>
                    <div className="header-content">
                        <h1>
                            {this.state.data.mainTitle}
                        </h1>
                        <h2>
                            Search &amp; download thousands of logos instantly
                        </h2>
                        <div className="search-container">
                            <form method="GET">
                                <label >
                                    <i className="search-icon"/>
                                    <input type="text" placeholder="What logo are you looking for?" name="q"
                                           className="search-input"/>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Card = React.createClass({
    getInitialState(){
        return {data: 0}
    },
    render: function () {
        return (
            <div>
                <div className="logos">
                    <div className="content-container">
                        <div>
                            <div className="logos__title">
                                <h3>Most Searched</h3>
                            </div>

                            <ul>
                                <li className="brand-logo">
                                    <div className="brand-logo__image flex-center">
                                        <img
                                            src="http://cdn.instantlogosearch.com/svg/instantlogosearch/Facebook (2).svg"
                                            alt="Facebook (instantlogosearch-facebook)" className="card_IMG_3"/>
                                    </div>
                                    <div className="brand-logo__ctas">
                                        <strong>Facebook</strong>
                                        <div className="brand-logo__download-ctas">
                                            <a href="http://cdn.instantlogosearch.com/svg/instantlogosearch/Facebook (2).svg">SVG</a><a
                                            href="http://cdn.instantlogosearch.com/png?class=instantlogosearch-facebook">PNG</a>
                                        </div>
                                        <a href="/facebook" className="brand-logo__collection-ctas"><span >Add to</span>
                                            <span>Bucket</span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

})

ReactDOM.render(<App />, document.getElementById('app'));
