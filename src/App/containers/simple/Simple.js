import React from 'react';

class SimpleContainer extends React.Component {
	state = {
		data : ''
	}

    componentDidMount() {
        fetch('http://localhost:3000/home.json')
			.then(response => {
			    return response.json();
			}).then(data => {
		        this.setState({data});
		    }).catch((err) => console.log('Fetch Error :-S', err));
    }

	render() {
        return (
            <div>
                <h1>Simple</h1>
                {this.state.data ?
                    this.state.data.key : null
                }
            </div>
        )
	}
}

export default SimpleContainer;