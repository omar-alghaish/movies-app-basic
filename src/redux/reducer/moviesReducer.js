import {ALLMOVIES} from '../types/moviestype'

const initalValue = {movies: [], pageCount: 0}
export const moviesReducer = (state = initalValue , action) =>{
    switch (action.type){
        case ALLMOVIES:
            return {movies : action.data}
            default:
                return state;
    }
}