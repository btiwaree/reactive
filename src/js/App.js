import React from 'react';
import ReactDOM from 'react-dom';

import {Header, Footer, Card, Parent} from './index';

var styles = require('../css/style.css');

var App = React.createClass({

    getInitialState: function() {
        return {
            filterText: ''
        };
    },

    handleInput: function(filterText){
      this.setState({
          filterText: filterText
      })
    },

    render : function() {

        return (
            <div>
                <Header filterText={this.state.filterText} onUserInput={this.handleInput} />

                {/**
                Calling Parent with cards as prop.
                 **/}
                <Parent cards={this.props.cards} filterText={this.state.filterText} />

                <Footer />
            </div>
        )
    }
});


let cards = [
    {name: "Facebook", source: "/src/img/fb.svg"},
    {name: "Twitter", source: "/src/img/Twitter.svg"},
    {name: "Imgur", source: "/src/img/Imgur.svg"},
    {name: "Slack", source: "/src/img/slack.svg"},
    {name: "Microsoft", source: "/src/img/microsoft.svg"},
    {name: "Amazon", source: "/src/img/Amazon.svg"},
    {name: "trivago", source: "/src/img/fb.svg"},
    {name: "LinkedIn", source: "/src/img/linkedin.svg"},
    {name: "JavaScript", source: "/src/img/javascript.svg"},
    {name: "React", source: "/src/img/react.svg"}

];

ReactDOM.render(<App cards={cards} />, document.getElementById('app'));