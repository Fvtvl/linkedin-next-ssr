import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import data from './pages/API/data.json';

//initial state
const startState = {
  cards: [],
};

//actions
export const initialCards = () => {
  return {
    type: 'INITIALCARD',
    cards: data,
  };
};

export const addItem = (item) => {
  return {
    type: 'ADD',
    item,
  };
};

//reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARD':
      return {
        cards: action.cards,
      };
    case 'ADD':
      return {
        ...state,
        cards: [...state.cards, action.item],
      };
    default:
      return state;
  }
};

//create store
const store = (initialState = startState) => {
  return createStore(reducer, initialState);
};

export const initStore = createWrapper(store);
