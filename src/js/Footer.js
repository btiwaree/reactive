/**
 * Created by bishesh on 23.04.16.
 */


import React from 'react';

var Footer = React.createClass({

    getInitialState: function () {
        return {data: {mainTitle: 'asd'}};
    },
    render: function () {
        return (


            <div className={'footer'}>
                <div className={'content-container'}>
                    <div className={'footer__top flex-spread'}>
                        <div><h4>Instant Logo Search</h4></div>
                        <div className={'flex'}>
                            <div className={'footer__contributors'}><span>Contributors: </span>
                                <a target="_blank">SVG Porn</a>
                                <a target="_blank">Logomono</a>
                                <a >Flag Webicons</a>
                                <a >...</a>
                            </div>

                            <div>
                                <a className={'footer__social-icon footer__social-icon_twitter'} target="_blank"/>
                                <a className={'footer__social-icon footer__social-icon_github'} target="_blank"/>
                            </div>
                        </div>
                    </div>
                    <div className={'footer__bottom flex-spread'}>
                        <div>
                            <a className={'terms-page'} target="_blank">Terms</a>
                            <span>&nbsp;| &nbsp;</span>
                            <span>copyright 2016</span>
                        </div>

                        <div>
                            <span>
                                <span>Cloned from </span>
                                <a className={'kogg-website'} >kogg</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
});

export default Footer;