import {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import Header from "../Header";
import CardItem from '../CardItem';
import './index.css';

const Dashboard = () => {
    const [cards, setCards] = useState([{id: 1, title: 'Card 1'}, {id: 2, title: 'Card 2'}, {id: 3, title: 'Card3'}, {id: 4, title: 'Card4'}]);

    useEffect(() => {
        const fetchData = async () => {
            const jwtToken = Cookies.get('jwt_token');
            const options = {
                headers: {
                Authorization: `Bearer ${jwtToken}`,
                },
                method: "GET",
            };
            const response = await fetch('http://localhost:3000/api/dashboard', options);
            if (response.ok === true) {
                const data = await response.json();
                const cardsData = [{id: 1, title: 'Card 1'}, {id: 2, title: 'Card 2'}, {id: 3, title: 'Card3'}, {id: 4, title: 'Card4'}];
                setCards(cardsData);
            }
        }
        fetchData();
    })
    return (
        <div className="dashboard-cont">
            <Header />
            <div className="cards">
                <h1 className="head">Dashboard</h1>
                <ul className="cards-list">
                    {cards.map(item => (
                        <CardItem details={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard
