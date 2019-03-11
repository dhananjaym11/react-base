import axios from 'axios';
import { loadUsers, loadUsersSuccess, loadUsersFailed } from '../actions';

export default {
    load: () => {
        return (dispatch) => {
            dispatch(loadUsers())
            return axios.get('https://api.github.com/users?since=0')
                .then(response => dispatch(loadUsersSuccess(response.data)))
                .catch(err => dispatch(loadUsersFailed(err)))
        }
    }
}
