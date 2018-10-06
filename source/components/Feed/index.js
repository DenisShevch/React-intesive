import React, { Component, Fragment } from 'react';

import Styles from './styles.m.css';

import Composer from '../Composer';
import Post from '../Post';
import StatusBar from '../StatusBar';

export default class Feed extends Component {
    render () {
        const {
            currentUserFirstName,
            avatar
        } = this.props;

        return (            
            <section className = { Styles.feed }>
                <StatusBar { ...this.props } />
                <Composer
                    avatar = { avatar } 
                    currentUserFirstName = { currentUserFirstName }                    
                />;
                <Post { ...this.props } />;
            </section>
        );
    }
}
