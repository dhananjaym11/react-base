import { LOAD_HEROES_SUCCESS, LOAD_HEROES_ERROR, UPDATE_HEROES } from "../constants";

const loadHeroesSuccess = (response) => ({
    type: LOAD_HEROES_SUCCESS,
    response
});

const loadHeroesFailed = (err) => ({
    type: LOAD_HEROES_ERROR,
    error: err
});

const updateHeroes = (response) => ({
    type: UPDATE_HEROES,
    response
});

export { loadHeroesSuccess, loadHeroesFailed, updateHeroes };