//Core
import React, { Component } from 'react';
import { Consumer } from '../HOC/withProfile';

import moment from 'moment';
import Styles from './styles.m.css';

export default class Post extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <img src = { context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>{moment().format('MMMM D h:mm:ss a')}</time>
                        <p>Hello Woody</p>
                    </section>
                )}
            </Consumer>            
        );
    }
}