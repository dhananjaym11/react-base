import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import * as actions from '../../core/actions';

class HeroesContainer extends Component {
    state = {
        name: ''
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
            name: this.state.name
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

    render() {
        return (
            <div>
                <h1>Heroes</h1>
                <div>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    <button onClick={this.handleAddNewHero}>Add</button>
                </div>
                {this.props.heroes.result ? this.props.heroes.result.map(hero => (
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