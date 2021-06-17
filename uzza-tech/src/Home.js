import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img
                 className="home__image"
                 src="https://images.unsplash.com/photo-1583803804322-d573fe51cbe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" 
                 alt=""
                />
             
                <div className="home__row">
                  <Product
                  id="333880"
                  title='Leafy Greens: Fresh, organically grown leafy green vegetables.'
                  price={200}
                  image="https://i.postimg.cc/1thDD25p/leafy-green-vegetables-1.jpg"
                  rating={5}
                  />
                  <Product 
                  id="333881"
                  title='Tomatoes: Plump, juicy tomatoes.'
                  price={450}
                  image="https://i.postimg.cc/Nf4yzZJs/Red-tomatoes-1.jpg"
                  rating={4}
                  />
                  <Product
                  id="333882"
                  title='Onions: High quality, fleshy red onions.'
                  price={350}
                  image="https://i.postimg.cc/1RMnWLY9/fresh-red-onions-tray-2883757-1.jpg"
                  rating={4}
                  />
                </div>

                <div className="home__row">
                    <Product
                    id="444880"
                    title='Bananas: Ripe Kampala bananas.'
                    price={350}
                    image="https://i.postimg.cc/BZ5XVtM9/banana-1.jpg"
                    rating={4}
                    />
                    <Product
                    id="444881"
                    title='Strawberries'
                    price={280}
                    image="https://i.postimg.cc/L8mmrXqw/strawberry-1200-1.jpg"
                    rating={5}
                    />
                    <Product
                    id="444882"
                    title='Grapes: Juicy, sweet grapes straight from the farm.'
                    price={400}
                    image="https://i.postimg.cc/mkVZ2z5P/grapes-1.jpg"
                    rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                    id="555880"
                    title='Tajfun Potatoes'
                    price={600}
                    image="https://i.postimg.cc/1tsZnR6w/potatoes2-1.jpg"
                    rating={5}
                    />
                    <Product
                    id="555881"
                    title='Fresh corn'
                    price={300}
                    image="https://i.postimg.cc/QMspG00q/Corn3-300x300-1-1.jpg"
                    rating={4}
                    />
                </div>
                </div>
            </div>
    );
}

export default Home
