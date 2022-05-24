import { createContext, useContext, useReducer } from 'react';
import { cardReducer, productReducer } from './reducers';
const { faker } = require('@faker-js/faker');

const Card = createContext();

function Context({ children }) {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.food(640, 680, true),
        inStock: faker.helpers.arrayElement([0, 1, 0, 0, 4, 7, 11]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));

    const [state, dispatch] = useReducer(cardReducer, {
        products: products,
        card: [],
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFistDelivery: false,
        byRating: 0,
        searchQuery: '',
    });

    return (
        <div>
            <Card.Provider
                value={{ state, dispatch, productState, productDispatch }}
            >
                {children}
            </Card.Provider>
        </div>
    );
}

export default Context;

export const CardState = () => useContext(Card);
