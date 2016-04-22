/**
 * Created by bishesh on 23.04.16.
 */

import React from 'react';

var Header = React.createClass({

    getInitialState: function () {
        return {data: {mainTitle: 'React Image Search'}};
    },
    render: function () {
        return (

            <div className={'header'}>
                <div className={'content-container'}>
                    <div className={'flex-spread'}>
                        <a href="/" className={'logo'}/>
                        <div className={'ShareButtons'}>
                            <a href="" className={'social-action social-action_twitter'}>
                                <span>tweet</span>
                            </a>
                            <a href="" className={'social-action social-action_facebook'}>
                                <span>share</span>
                            </a>
                        </div>
                    </div>
                    <div className={'header-content'}>
                        <h1>
                            {this.state.data.mainTitle}
                        </h1>
                        <h2>
                            Search &amp; download thousands of logos instantly
                        </h2>
                        <div className={'search-container'}>
                            <form method="GET">
                                <label >
                                    <i className={'search-icon'}/>
                                    <input type="text" placeholder="What logo are you looking for?" name="q"
                                           className={'search-input'} />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Header;