import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
var style = require('./css/style.css');


class App extends React.Component {

    constructor() {
        super();
    }

    render() {

        let my_cards = {Facebook:"/img/fb.svg",
                            Twitter:"/img/Twitter.svg",
                            A:"/img/fb.svg",
                            B:"/img/Twitter.svg",
                            C:"/img/fb.svg",
                            D:"/img/Twitter.svg",
                            E:"/img/fb.svg",
                            F:"/img/Twitter.svg",
                            G:"/img/fb.svg",
                            H:"/img/Twitter.svg"};

        return (
            <div>
                <Header />
                <Parent>
                    <Card name="Facebook" label="a" img="/img/fb.svg"/>
                    <Card name="Twitter" label="b"  img="/img/Twitter.svg"/>
                    <Card name="A" label="c" img="/img/fb.svg"/>
                    <Card name="B" label="d"  img="/img/Twitter.svg"/>
                    <Card name="C" label="e"  img="/img/fb.svg"/>
                    <Card name="D" label="f"  img="/img/Twitter.svg"/>
                    <Card name="E" label="g"  img="/img/fb.svg"/>
                    <Card name="F" label="h"  img="/img/Twitter.svg"/>
                    <Card name="G" label="i"  img="/img/fb.svg"/>
                    <Card name="H" label="j"  img="/img/Twitter.svg"/>


                    {/*
                      * Doesn't work yet
                      *
                     {Object.keys(my_cards).map(function(value, index){
                     return <Card  key={value} name={ value} img={my_cards[index]} />
                     })}
                     */}


                </Parent>
                <Footer />
            </div>
        )
    }
}

/* Wrapper for the cards
 * with props.children
 * for the cards
 */
var Parent = React.createClass({
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
                                {this.props.children}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


//Header
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

//Footer
var Footer = React.createClass({

    getInitialState: function () {
        return {data: {mainTitle: 'asd'}};
    },
    render: function () {
        return (


            <div className="footer">
                <div className="content-container">
                    <div className="footer__top flex-spread">
                        <div><h4>Instant Logo Search</h4></div>
                        <div className="flex">
                            <div className="footer__contributors"><span>Contributors: </span>
                                <a target="_blank">SVG Porn</a>
                                <a target="_blank">Logomono</a>
                                <a >Flag Webicons</a>
                                <a >...</a>
                            </div>

                            <div>
                                <a className="footer__social-icon footer__social-icon_twitter" target="_blank"/>
                                <a className="footer__social-icon footer__social-icon_github" target="_blank"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom flex-spread">
                        <div>
                            <a className="terms-page" target="_blank">Terms</a>
                            <span>&nbsp;| &nbsp;</span>
                            <span>copyright 2016</span>
                        </div>

                        <div>
                            <span>
                                <span>Cloned from </span>
                                <a className="kogg-website" >kogg</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
});


/*Card that takes a
 * @name for name of the card and
 * @img for source of image
 * as props that are used in card.
 */
var Card = React.createClass({
    getInitialState(){
        return {data: 0}
    },
    render: function () {
        return (

            <li className="brand-logo">
                <div className="brand-logo__image flex-center">
                    <img src={this.props.img} alt={this.props.name} className="card_IMG_3"/>
                </div>
                <div className="brand-logo__ctas">
                    <strong>{this.props.name}</strong>
                    <div className="brand-logo__download-ctas">
                        <a >SVG</a>
                        <a >PNG</a>
                    </div>
                    <a className="brand-logo__collection-ctas">
                        <span >Add to Bucket</span>
                    </a>
                </div>
            </li>
        )
    }

});

ReactDOM.render(<App />, document.getElementById('app'));