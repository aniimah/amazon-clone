import React from 'react'
import './Home.css';
import cover from './model.jpg';
import brushimage from'./makeupbrush.png';
import eyeshadow from './eye-shadow.png';
import lipgloss from'./lipgloss.png';
import kit from './makeupkit.png';
import nailpolish from './nailpolish.png';
import light from'./ring light.png';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home__cover"
            src={cover} 
            alt="" />

        {/* Product id, title, price, rating, image, */}
        <div className="home__row">
        <Product 
        id="12345"
        title="Single MakeUp Blush Brush"
        price={8.00} 
        rating={3}
        image={brushimage} />

        <Product 
        id="163953"
        title="Nine Eye-shadows (Different Colors)"
        price={35.00} 
        rating={4}
        image={eyeshadow} />
        </div>

        <div className="home__row">
        <Product 
        id="183874"
        title="CRUNCHI Lipgloss"
        price={7.00} 
        rating={3}
        image={lipgloss} />

        <Product 
        id="338243"
        title="Full MakeUp Kit"
        price={45.00} 
        rating={5}
        image={kit} />

        <Product 
        id="377288"
        title="Six Sets of Nail Polish"
        price={50.00} 
        rating={4}
        image={nailpolish} />
        </div>

        <div className="home__row">
        <Product 
        id="123454"
        title="Ring Light/Studio Light"
        price={25.00} 
        rating={5}
        image={light} />

        </div>
        { /* Product */ }
        </div>
    )
}

export default Home
