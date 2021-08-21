import classes from './HCard.module.css'
 

const HCard = (props) => {
    let width = props['width'];
    let height = props['height'] === 'X' ? '400px' : '200px';
    let theam = props['theam'] === 'black' ? 'main_dark' : 'main';
    return <div style={{ width: width, height: height }} className={classes[theam]}>
        {props.children} 
    </div>
}

export default HCard