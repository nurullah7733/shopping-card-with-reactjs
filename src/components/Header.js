import React from 'react';
import {
    Navbar,
    Nav,
    FormControl,
    Form,
    Container,
    Dropdown,
    Badge,
    Button,
} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CardState } from '../context/Context';
import { Link } from 'react-router-dom';
import './style.css';

function Header(props) {
    const { productDispatch } = CardState();
    const {
        state: { card },
        dispatch,
    } = CardState();
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">SHOPPING CARD</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        ></Nav>
                        <Form className="d-flex m-auto">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2 "
                                aria-label="Search"
                                onChange={(e) => {
                                    productDispatch({
                                        type: 'FILTER_BY_SEARCH',
                                        payload: e.target.value,
                                    });
                                }}
                            />
                        </Form>
                        <Dropdown className="dropstart">
                            <Dropdown.Toggle variant="success">
                                <Badge>{card.length}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                                style={{ minWidth: 370, marginTop: 50 }}
                            >
                                {card.length > 0 ? (
                                    <>
                                        {card.map((product) => (
                                            <div className="filterCardContainer">
                                                <div className="filterCard">
                                                    <div className="filterCardImg">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                        />
                                                    </div>
                                                    <div>
                                                        <span
                                                            style={{
                                                                fontWeight: 700,
                                                            }}
                                                        >
                                                            {product.name}
                                                        </span>{' '}
                                                        <br />
                                                        <span
                                                            style={{
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            ${product.price}
                                                        </span>
                                                    </div>
                                                    <div className="cardFilterDelete">
                                                        <AiFillDelete
                                                            fontSize={25}
                                                            color="red"
                                                            onClick={() => {
                                                                dispatch({
                                                                    type: 'REMOVE_FROM_CARD',
                                                                    payload:
                                                                        product,
                                                                });
                                                            }}
                                                            style
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="cardFilterGoToCard">
                                            <Link to="/card">
                                                <Button>Go To Card</Button>
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <sapn style={{ padding: 10 }}>
                                        Card is Empty
                                    </sapn>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
