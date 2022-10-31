import { ALLMOVIES } from '../types/moviestype'



const getAllMovies = () => {
    return {
        type: ALLMOVIES, data: []
    }
}