import React, { useEffect, useState } from 'react';
import {
    Button,
    Container,
    Form,
    Image,
    ListGroup,
    ListGroupItem,
    Row,
} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CardState } from '../context/Context';
import Rating from './Rating';

function Card(props) {
    const [total, setTotal] = useState(0);

    const {
        state: { card },
        dispatch,
    } = CardState();
    console.log(card);

    useEffect(() => {
        setTotal(card.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
    }, [card]);

    return (
        <div className="totalCardContainer">
            <Row>
                <div className="col-md-8">
                    <div>
                        <ListGroup>
                            {card.map((product) => (
                                <ListGroupItem>
                                    <Row>
                                        <div className="col-md-2">
                                            <Image
                                                fluid
                                                rounded
                                                src={product.image}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            {product.name}
                                        </div>
                                        <div className="col-md-2">
                                            ${product.price.split('.')[0]}
                                        </div>
                                        <div className="col-md-2">
                                            <Rating rating={product.ratings} />
                                        </div>
                                        <div className="col-md-2">
                                            <Form.Select
                                                aria-label="Default select example"
                                                onChange={(e) =>
                                                    dispatch({
                                                        type: 'CHANGE_CARD_QTY',
                                                        payload: {
                                                            id: product.id,
                                                            qty: e.target.value,
                                                        },
                                                    })
                                                }
                                            >
                                                {[
                                                    ...Array(
                                                        product.inStock
                                                    ).keys(),
                                                ].map((x) => (
                                                    <option value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                        <div className="col-md-2">
                                            <AiFillDelete
                                                style={{ cursor: 'pointer' }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: 'REMOVE_FROM_CARD',
                                                        payload: product,
                                                    })
                                                }
                                                fontSize="20"
                                                color="red"
                                            />
                                        </div>
                                    </Row>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="totalCard">
                        <h4>Subtotal ({card.length}) Items</h4>
                        <strong>Total: ${total}</strong>
                        <div>
                            <Button
                                disabled={card.length === 0}
                                style={{ width: '100%', marginTop: '15px' }}
                            >
                                Proceed to Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default Card;
