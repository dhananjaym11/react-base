import axios from 'axios';
import { loadDashboard, dashboardLoaded, dashabordFailed } from '../actions';

export default {
    load: () => {
        return (dispatch) => {
            dispatch(loadDashboard())
            return axios.get('http://localhost:3000/api/home.json')
                .then(response => dispatch(dashboardLoaded(response.data)))
                .catch(err => dispatch(dashabordFailed(err)))
        }
    }
}
