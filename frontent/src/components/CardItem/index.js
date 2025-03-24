import {Link} from 'react-router-dom';
import './index.css';

const CardItem = props => {
    const {details} = props 
    const {title} = details

    return (
        <Link className="nav-link" to='/map'>
            <li className="item">
                <h1 className="title">{title}</h1>
            </li>
        </Link>
    )
}

export default CardItem;
