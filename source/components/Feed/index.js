import React, { Component, Fragment } from 'react';

import Styles from './styles.m.css';

import Composer from '../Composer';
import Post from '../Post';
import StatusBar from '../StatusBar';

export default class Feed extends Component {
    render () {
        return (            
            <section className = { Styles.feed }>
                <StatusBar />
                <Composer />;
                <Post />;
            </section>
        );
    }
}
