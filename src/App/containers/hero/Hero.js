import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../core/actions';

class HeroContainer extends Component {
    state = {
        hero: {}
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        if (this.props.heroes.result && this.props.heroes.result.length) {
            const hero = this.props.heroes.result.find(hero => hero.id === id);
            this.setState({
                hero: hero
            })
        }
    }

    handleNameChange = (e) => {
        const hero = { ...this.state.hero };
        hero.name = e.target.value
        this.setState({
            hero: hero
        })
    }

    handleCheckboxChange = (e) => {
        const hero = { ...this.state.hero };
        hero.completed = e.target.checked
        this.setState({
            hero: hero
        })        
    }

    saveChanges = () => {
        const updatedHero = { ...this.state.hero };
        const heroes = [...this.props.heroes.result];
        const updatedHeroIndex = heroes.findIndex(hero => hero.id === updatedHero.id);
        heroes[updatedHeroIndex] = updatedHero;
        this.props.updateHeroes(heroes);
        this.props.history.push('/heroes');
    }

    cancelChanges = () => {
        this.props.history.push('/heroes');        
    }

    render() {
        let heroDetails = (
            <div>
                <h3>Loading</h3>
            </div>
        );

        if (this.state.hero.id) {
            const hero = this.state.hero;

            heroDetails = (
                <div>
                    <h1>{hero.name} Details</h1>
                    <h4>Id: {hero.id}</h4>
                    <h4>Name:
                        <input type="text" value={hero.name} onChange={this.handleNameChange} />
                    </h4>
                    <h4>Completed:
                        <input type="checkbox" checked={hero.completed} onChange={this.handleCheckboxChange} />
                    </h4>
                    <button onClick={this.saveChanges} >Save</button>
                    <button onClick={this.cancelChanges} >Cancel</button>
                </div>
            )
        }
        return (
            <>
                {heroDetails}
            </>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        heroes: state.heroesReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateHeroes: (heroes) => {
            dispatch(actions.updateHeroes(heroes))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer);