import React from 'react';
import { CardState } from '../context/Context';
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import './style.css';

function Home(props) {
    const {
        state: { products },
        productState: { byStock, byFistDelivery, byRating, sort, searchQuery },
    } = CardState();

    const transformProduct = () => {
        let sortedProduct = products;

        if (sort) {
            sortedProduct = sortedProduct.sort((a, b) =>
                sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
            );
        }
        if (!byStock) {
            sortedProduct = sortedProduct.filter((product) => product.inStock);
        }
        if (byFistDelivery) {
            sortedProduct = sortedProduct.filter(
                (product) => product.fastDelivery
            );
        }
        if (byRating) {
            sortedProduct = sortedProduct.filter(
                (product) => product.ratings >= byRating
            );
        }
        if (searchQuery) {
            sortedProduct = sortedProduct.filter((product) =>
                product.name.toLowerCase().includes(searchQuery)
            );
        }
        return sortedProduct;
    };

    if (sort) {
    }
    return (
        <div className="home">
            <Filter />
            <div className="productsContainer">
                {transformProduct().map((product) => (
                    <SingleProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;
