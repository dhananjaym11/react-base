import axios from 'axios';
import { loadDashboard, loadDashboardLoaded, loadDashabordFailed } from '../actions';

export const load =() => {
    return (dispatch) => {
        dispatch(loadDashboard())
        return axios.get('http://localhost:3000/home.json')
            .then(response => dispatch(loadDashboardLoaded(response.data)))
            .catch(err => dispatch(loadDashabordFailed(err)))
    }
}