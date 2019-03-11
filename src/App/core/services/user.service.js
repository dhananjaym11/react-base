import axios from 'axios';
import { loadUser, loadUserSuccess, loadUserFailed } from '../actions';

export default {
    loadUser: (username) => {
        debugger
        return (dispatch) => {
            dispatch(loadUser())
            return axios.get('https://api.github.com/users/' + username)
                .then(response => dispatch(loadUserSuccess(response.data)))
                .catch(err => dispatch(loadUserFailed(err)))
        }
    }
}
