import {Fragment} from 'react';

const CardHolder = (props) => {
    console.log(props.children.length);
    return <Fragment>
            {props.children}
            </Fragment>
}

export default CardHolder;