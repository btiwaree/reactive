/**
 * Created by bishesh on 23.04.16.
 */

import React from 'react';

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
                                {this.props.children}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Parent;