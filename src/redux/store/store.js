import {createStore} from 'redux'
import { moviesReducer } from '../reducer/moviesReducer'

//1-create store
export const store = createStore(moviesReducer)