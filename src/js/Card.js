/**
 * Created by bishesh on 23.04.16.
 */

import React from 'react';

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

            <li className={'brand-logo'}>
                <div className={'brand-logo__image flex-center'}>
                    <img src={this.props.img} alt={this.props.name} className={'card_IMG_3'}/>
                </div>
                <div className={'brand-logo__ctas'}>
                    <strong>{this.props.name}</strong>
                    <div className={'brand-logo__download-ctas'}>
                        <a >SVG</a>
                        <a >PNG</a>
                    </div>
                    <a className={'brand-logo__collection-ctas'}>
                        <span >Add to Bucket</span>
                    </a>
                </div>
            </li>
        )
    }

});

export default Card;