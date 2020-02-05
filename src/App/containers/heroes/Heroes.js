import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import * as actions from '../../core/actions';

class HeroesContainer extends Component {
    state = {
        name: '',
        visibilityFilter: 'SHOW_ALL'
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleAddNewHero = () => {
        const lastMemberId = this.props.heroes.result.length ? this.props.heroes.result[this.props.heroes.result.length - 1].id : 0;
        const newHero = {
            id: lastMemberId + 1,
            name: this.state.name,
            completed: false
        }
        const heroes = [...this.props.heroes.result, newHero];
        this.props.updateHeroes(heroes);
        this.setState({
            name: ''
        })
    }

    handleDeleteHero = (id) => {
        const heroes = [...this.props.heroes.result];
        const delteHeroIndex = heroes.findIndex(hero => hero.id === id);
        heroes.splice(delteHeroIndex, 1);
        this.props.updateHeroes(heroes);
    }

    changeVisibilityFilter = (visibilityFilter) => {
        this.setState({
            visibilityFilter: visibilityFilter
        })
    }

    render() {
        return (
            <div>
                <h1>Heroes</h1>
                <div>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    <button onClick={this.handleAddNewHero}>Add</button>
                </div>
                <div>
                    Show: 
                    <ul className="show-list">
                        <li 
                        className={this.state.visibilityFilter === 'SHOW_ALL' ? 'active' : ''} 
                        onClick={()=>this.changeVisibilityFilter('SHOW_ALL')}>All</li>
                        <li 
                        className={this.state.visibilityFilter === 'SHOW_ACTIVE' ? 'active' : ''} 
                         onClick={()=>this.changeVisibilityFilter('SHOW_ACTIVE')}>Active</li>
                        <li 
                        className={this.state.visibilityFilter === 'SHOW_COMPLETED' ? 'active' : ''} 
                        onClick={()=>this.changeVisibilityFilter('SHOW_COMPLETED')}>Completed</li>
                    </ul>
                </div>
                {this.props.heroes.result ? this.props.heroes.result.filter(hero=>{
                    if(this.state.visibilityFilter === 'SHOW_COMPLETED') {
                        return hero.completed;
                    } else if (this.state.visibilityFilter === 'SHOW_ACTIVE') {
                        return !hero.completed;
                    } else {
                        return hero;
                    }
                }).map(hero => (
                    <div key={hero.id}>
                        <Link to={`heroes/${hero.id}`}>
                            <span className="badge">{hero.id}</span> {hero.name}
                        </Link>
                        <button className="button-btn" title="delete hero" onClick={() => this.handleDeleteHero(hero.id)}>x</button>
                    </div>
                )) : null}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateHeroes: (heroes) => {
            dispatch(actions.updateHeroes(heroes))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        heroes: state.heroesReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesContainer);