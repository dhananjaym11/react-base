import { LOAD_HEROES, LOAD_HEROES_SUCCESS, LOAD_HEROES_ERROR } from "../constants";

const loadHeroes = () => ({
    type: LOAD_HEROES,
    payload: null
});

const loadHeroesSuccess = (response) => ({
    type: LOAD_HEROES_SUCCESS,
    response
});

const loadHeroesFailed = (err) => ({
    type: LOAD_HEROES_ERROR,
    error: err
});

export { loadHeroes, loadHeroesSuccess, loadHeroesFailed };