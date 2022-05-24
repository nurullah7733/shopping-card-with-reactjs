import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import './style.css';
import { CardState } from '../context/Context';

function SingleProduct({ product }) {
    const {
        state: { card },
        dispatch,
    } = CardState();

    return (
        <div className="products">
            <Card key={product.id}>
                <Card.Img src={product.image} alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle style={{ marginBottom: '5px' }}>
                        <span>${product.price.split('.')[0]}</span>
                        {product.fastDelivery ? (
                            <div>First Delivery</div>
                        ) : (
                            <div>4 Days delivery</div>
                        )}
                        <Rating rating={product.ratings} />
                    </Card.Subtitle>
                    {card.some((p) => p.id === product.id) ? (
                        <Button
                            variant="danger"
                            onClick={() => {
                                dispatch({
                                    type: 'REMOVE_FROM_CARD',
                                    payload: product,
                                });
                            }}
                        >
                            Remove From Card
                        </Button>
                    ) : (
                        <Button
                            disabled={!product.inStock}
                            onClick={() => {
                                dispatch({
                                    type: 'ADD_TO_CARD',
                                    payload: product,
                                });
                            }}
                        >
                            {!product.inStock ? 'Out of Stock' : 'Add to Card'}
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default SingleProduct;
