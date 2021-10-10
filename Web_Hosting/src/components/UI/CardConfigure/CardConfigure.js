import HCard from '../../UI/HCard/HCard';
import CardHolder from '../../UI/CardHolder/CardHolder';

const CardConfigure = (props) => {
   const total = props['count'];
   const width = 100 / total + "%";
   const childLength = props.children.length;
    return <CardHolder>
       {[...Array(total)].map((e, i) => <HCard theam={props['theam']} height = {props.size} width={width} key={i}>
          {childLength > 1 ? props.children[i] : props.children}</HCard> )}
    </CardHolder>
}

export default CardConfigure;