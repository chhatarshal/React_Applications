import classes from './HCard.module.css'
 

const HCard = (props) => {
    let width = props['width'];
    let theam = props['theam'] === 'black' ? 'main_dark' : 'main';
    return <div style={{ width: width}} className={classes[theam]}>
        {props.children} 
    </div>
}

export default HCard