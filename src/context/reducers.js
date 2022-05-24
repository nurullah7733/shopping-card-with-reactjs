export const cardReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CARD':
            return {
                ...state,
                card: [...state.card, { ...action.payload, qty: 1 }],
            };
        case 'REMOVE_FROM_CARD':
            return {
                ...state,
                card: state.card.filter((c) => c.id !== action.payload.id),
            };
        case 'CHANGE_CARD_QTY':
            return {
                ...state,
                card: state.card.filter((c) =>
                    c.id === action.payload.id
                        ? (c.qty = action.payload.qty)
                        : c.qty
                ),
            };
        default:
            return state;
    }
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sort: action.payload,
            };
        case 'FILTER_BY_STOCK':
            return {
                ...state,
                byStock: !state.byStock,
            };
        case 'FILTER_BY_FISTDELIVERY':
            return {
                ...state,
                byFistDelivery: !state.byFistDelivery,
            };
        case 'FILTER_BY_RATING':
            return {
                ...state,
                byRating: action.payload,
            };
        case 'FILTER_BY_SEARCH':
            return {
                ...state,
                searchQuery: action.payload,
            };
        case 'CLEAR_FILTER':
            return {
                byStock: false,
                byFistDelivery: false,
                byRating: 0,
                searchQuery: '',
            };

        default:
            return state;
    }
};
