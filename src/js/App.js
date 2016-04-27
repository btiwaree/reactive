import React from 'react';
import ReactDOM from 'react-dom';

import {Header, Footer, Card, Parent} from './index';

var styles = require('../css/style.css');

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        
        return (
            <div>
                <Header />
                <Parent>

                    {this.props.product.map(function(col) {
                        return <Card key={col.name} name={col.name} img={col.source}>{col.name}</Card>;
                    })}

                </Parent>
                <Footer />
            </div>
        )
    }
}


let card = [
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

ReactDOM.render(<App cards={card} />, document.getElementById('app'));