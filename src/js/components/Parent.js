/**
 * Created by bishesh on 23.04.16.
 */

import React from 'react';
import Card from './Card';

/* Wrapper for the cards
 * with props.children
 * for the cards
 */
var Parent = React.createClass({
    render: function () {
        return (
            <div>
                <div className={'logos'}>
                    <div className={'content-container'}>
                        <div>
                            <div className={'logos__title'}>
                                <h3>Most Searched</h3>
                            </div>

                            <ul>
                                {this.props.cards.map(function(card) {
                                    if (card.name.indexOf(this.props.filterText) === -1){
                                        return;
                                    }
                                    return <Card key={card.name} name={card.name} img={card.source}>{card.name}</Card>;
                                }.bind(this))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Parent;