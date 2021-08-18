import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    console.log('----------=> Header render')
    return <>
        <div className={classes['main_header']}>We are header</div>
    </>
}

export default React.memo(Header);