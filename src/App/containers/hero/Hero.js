import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroContainer extends Component {

    render() {
        const id = parseInt(this.props.match.params.id);
        if (this.props.heroes.result && this.props.heroes.result.length) {
            const hero = this.props.heroes.result.find(hero => hero.id === id);
            return (
                <div>
                    <h1>{hero.name}</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Hero</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        heroes: state.heroesReducer
    }
}

export default connect(mapStateToProps)(HeroContainer);