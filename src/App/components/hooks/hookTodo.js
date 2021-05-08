import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import * as actions from '../../core/actions';

export default function HookTodo() {
    const [name, setName] = useState('');
    const [visibilityFilter, changeVisibilityFilter] = useState('SHOW_ALL');
    const dispatch = useDispatch();
    const heroes = useSelector(state => state.heroesReducer.result);

    const handleAddNewHero = useCallback(() => {
        const lastMemberId = heroes.length ? heroes[heroes.length - 1].id : 0;
        const newHero = {
            id: lastMemberId + 1,
            name: name,
            completed: false
        }
        const heroesLocal = [...heroes, newHero];
        dispatch(actions.updateHeroes(heroesLocal));
        setName('');
    }, [dispatch, name, heroes]);
    
    const handleDeleteHero = useCallback((id) => {
        const heroesLocal = [...heroes];
        const delteHeroIndex = heroesLocal.findIndex(hero => hero.id === id);
        heroesLocal.splice(delteHeroIndex, 1);
        dispatch(actions.updateHeroes(heroesLocal));
    }, [dispatch, heroes]);

    return (
        <div>
            <h2>Todo</h2>
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <button onClick={handleAddNewHero}>Add</button>
            </div>
            <div>
                <ul className="show-list">
                    <li 
                    className={visibilityFilter === 'SHOW_ALL' ? 'active' : ''} 
                    onClick={()=>changeVisibilityFilter('SHOW_ALL')}>All</li>
                    <li 
                    className={visibilityFilter === 'SHOW_ACTIVE' ? 'active' : ''} 
                        onClick={()=>changeVisibilityFilter('SHOW_ACTIVE')}>Active</li>
                    <li 
                    className={visibilityFilter === 'SHOW_COMPLETED' ? 'active' : ''} 
                    onClick={()=>changeVisibilityFilter('SHOW_COMPLETED')}>Completed</li>
                </ul>
            </div>
            {
                heroes.filter(hero=>{
                    if(visibilityFilter === 'SHOW_COMPLETED') {
                        return hero.completed;
                    } else if (visibilityFilter === 'SHOW_ACTIVE') {
                        return !hero.completed;
                    } else {
                        return hero;
                    }
                }).map(hero => (
                    <div key={hero.id}>
                        <Link to={`heroes/${hero.id}`}>
                            <span className="badge">{hero.id}</span> {hero.name}
                        </Link>
                        <button className="button-btn" title="delete hero" onClick={() => handleDeleteHero(hero.id)}>x</button>
                    </div>
                ))
            }
        </div>
    )
}