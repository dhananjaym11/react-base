import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import * as actions from '../../core/actions';

class HeroesContainer extends Component {

    componentDidMount() {
        this.props.loadHeroes();
    }

    render() {
        return (
            <div>
                <h1>Heroes</h1>
                {this.props.heroes.result ? this.props.heroes.result.map(hero => (
                    <div key={hero.id}>
                        <Link to={`heroes/${hero.id}`}>
                            <span className="badge">{hero.id}</span> {hero.name}
                        </Link>
                    </div>
                )) : null}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadHeroes: () => {
            dispatch(actions.loadHeroes())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        heroes: state.heroesReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesContainer);