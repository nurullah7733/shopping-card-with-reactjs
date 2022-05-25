import { Button, Form } from 'react-bootstrap';
import Rating from './Rating';
import { CardState } from '../context/Context';
import './style.css';

function Filter() {
    const {
        productState: { byStock, byFistDelivery, byRating, sort, searchQuery },
        productDispatch,
    } = CardState();
    console.log(byStock, byFistDelivery, byRating, sort, searchQuery);

    return (
        <div className="filters">
            <span className="title">Filter Product</span>
            <span>
                <Form.Check
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() => {
                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: 'lowToHigh',
                        });
                    }}
                    checked={sort === 'lowToHigh' ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() => {
                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: 'highToLow',
                        });
                    }}
                    checked={sort === 'highToLow' ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() => {
                        productDispatch({
                            type: 'FILTER_BY_STOCK',
                        });
                    }}
                />
            </span>
            <span>
                <Form.Check
                    label="First Delivery Only"
                    name="group2"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() => {
                        productDispatch({
                            type: 'FILTER_BY_FISTDELIVERY',
                        });
                    }}
                />
            </span>
            <span>
                <label htmlFor=""> Rating: </label>{' '}
                <Rating
                    rating={byRating}
                    handleRating={(i) => {
                        productDispatch({
                            type: 'FILTER_BY_RATING',
                            payload: i + 1,
                        });
                    }}
                    style={{ cursor: 'pointer' }}
                />
            </span>
            <Button
                variant="light"
                onClick={() =>
                    productDispatch({
                        type: 'CLEAR_FILTER',
                    })
                }
            >
                Clear Filter
            </Button>
        </div>
    );
}

export default Filter;
