import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import products from './products';


export const reducers = combineReducers({ posts, auth, products});
