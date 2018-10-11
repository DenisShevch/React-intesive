import React, { Component, Fragment } from 'react';

import Styles from './styles.m.css';

import Composer from '../Composer';
import Post from '../Post';
import StatusBar from '../StatusBar';
import Spinner from '../Spinner';

export default class Feed extends Component {
    state = {
        posts: [        
            { id: 1, comment: 'Hello', created: 1526825076849 }, 
            { id: 2, comment: 'Hi there!!!', created: 1526825076874 },
            { id: 3, comment: 'Hello :-)', created: 1526825076889 }
        ],
        isSpinning: false,
    };
    render () {
        const { posts } = this.state;
        
        const postsJSX = posts.map((post) => {
            return <Post key = { post.id } { ...post } />;
        });

        return (            
            <section className = { Styles.feed }>
                <Spinner isSpinning = { this.state.isSpinning } />
                <StatusBar />
                <Composer />
                {postsJSX}
            </section>
        );
    }
}
