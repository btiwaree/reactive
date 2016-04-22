import React from 'react';
import ReactDOM from 'react-dom';

import {Header, Footer, Card, Parent} from './index';

var styles = require('../css/style.css');

class App extends React.Component {

    constructor() {
        super();
    }

    render() {

        let my_cards = {Facebook:"/src/img/fb.svg",
                            Twitter:"/src/img/Twitter.svg",
                            Reddit:"/src/img/fb.svg",
                            Imgur:"/src/img/Twitter.svg",
                            Slack:"/src/img/fb.svg",
                            D:"/src/img/Twitter.svg",
                            E:"/src/img/fb.svg",
                            F:"/src/img/Twitter.svg",
                            G:"/src/img/fb.svg",
                            H:"/src/img/Twitter.svg"};

        return (
            <div>
                <Header />
                <Parent>

                     {Object.keys(my_cards).map(function(value){
                     return <Card  key={value} name={ value} img={my_cards[value]} />
                     })}

                </Parent>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));