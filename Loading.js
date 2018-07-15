import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Loading = (props) => {
        return (
        <div style={{background: props.barColor || 'white'}} className={css(styles.loadingBar)}><div style={{background: props.bulletColor || 'black'}} className={css(styles.loadingBullet)}></div></div>
        )
}

const moving = {
    '0%': {
        left: '0%'
    },
    '100%': {
        left: '50%'
    }
}

const styles = StyleSheet.create({
    loadingBar:  {
        width: '100px',
        height: '3px',
        position: 'relative',
        margin: '0 auto'
    },
    loadingBullet: {
        height: '3px',
        width: '50px',
        position: 'absolute',
        animationName: moving,
        animationDuration: '0.5s',
        animationDirection: 'alternate',
        animationIterationCount: 'infinite'
    }
})

export default Loading;